"use strict"
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite"; 
import { startGame, EGameStatus, soundMuted, hero, obstacles, baits } from "./FlappyBird.mjs"; 
import { TSoundFile } from "libSound"; 

const fnCountDown = "./Media/countDown.mp3"; 
const fnRunning = "./Media/running.mp3"; 
const getReadyMs = 1000;
const bestScoreStorageKey = "flappyBirdBestScore";

export class TMenu {
    #spTitle; 
    #spPlayBtn; 
    #spCountDown; 
    #sfCountDown; 
    #sfRunning; 
    #spGameScore; 
    #spGetReady; 
    #spGameOverBoard;
    #spMedal;
    #spFinalScore;
    #spHighScore;
    #highScore;

    constructor(aSpcvs, aSPI){
         this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 110); 
            this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 236, 270); 
         this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this)); 

         this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 200); 
         this.#spCountDown.visible = false; 

         this.#sfCountDown = null; 
         this.#sfRunning = null; 

         this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 20, 15); 
         this.#spGameScore.alpha = 0.65; 

         this.#spGetReady= new TSprite(aSpcvs, aSPI.infoText, 200, 200);
         this.#spGetReady.index = 0; 
         this.#spGetReady.hidden = true; 

            this.#spGameOverBoard = new TSprite(aSpcvs, aSPI.gameOver, 175, 130);
            this.#spGameOverBoard.hidden = true;

            const medalX = this.#spGameOverBoard.x + 25;
            const medalY = this.#spGameOverBoard.y + 40;
            this.#spMedal = new TSprite(aSpcvs, aSPI.medal, medalX, medalY);
            this.#spMedal.hidden = true;

            this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 340, 165, 0, 3);
            this.#spFinalScore.visible = false;

            this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 340, 207, 0, 3);
            this.#spHighScore.visible = false;

            this.#highScore = this.getSavedBestScore();
            this.#spHighScore.value = this.#highScore;
         

    }


setSoundMute(aIsMuted){
    //Safety guard, because #sfrunning is set to null at the start, to run the other code under it needs to have values. 
    if(!this.#sfRunning){
        return;
    }

    //Silencing the music if aIsMuted = true, which is determined in setSoundOff function
    if(aIsMuted){
        this.#sfRunning.stop(); 
    }else if(EGameStatus.state === EGameStatus.gaming){
        this.#sfRunning.play(); 
    }
}


incGameScore(aScore){
    this.#spGameScore.value += aScore; 
    this.#spFinalScore.value = this.#spGameScore.value;

    if(this.#spGameScore.value > this.#highScore){
        this.#highScore = this.#spGameScore.value;
        this.saveBestScore(this.#highScore);
    }

    this.#spHighScore.value = this.#highScore;
}

getSavedBestScore(){
    try {
        const savedScore = localStorage.getItem(bestScoreStorageKey);
        if(savedScore === null){
            return 0;
        }

        const parsedScore = parseInt(savedScore, 10);
        return Number.isFinite(parsedScore) ? parsedScore : 0;
    } catch(_error) {
        return 0;
    }
}

saveBestScore(aScore){
    try {
        localStorage.setItem(bestScoreStorageKey, aScore.toString());
    } catch(_error) {
        // Ignore storage errors (e.g. private mode with blocked storage)
    }
}

stopSound(){
    this.#sfRunning.stop(); 
}


draw(){
    const isGameOver = EGameStatus.state === EGameStatus.gameOver;
    const canShowPlayButton = EGameStatus.state === EGameStatus.idle || isGameOver;

    this.#spPlayBtn.hidden = !canShowPlayButton;
    this.#spGameOverBoard.hidden = !isGameOver;
    this.#spMedal.hidden = !isGameOver;
    this.#spFinalScore.visible = isGameOver;
    this.#spHighScore.visible = isGameOver;

    this.#spTitle.draw(); 
    this.#spPlayBtn.draw(); 
    this.#spCountDown.draw(); 
    this.#spGameScore.draw(); 
    this.#spGetReady.draw(); 
    this.#spGameOverBoard.draw();
    this.#spMedal.draw();
    this.#spFinalScore.draw();
    this.#spHighScore.draw();
}

countDown(){
    if(!this.#sfRunning){
        this.#sfRunning = new TSoundFile(fnRunning);
    }

    if(this.#spCountDown.value > 1) { 
        setTimeout(this.countDown.bind(this), 1000); 
        this.#spCountDown.value--; 
    } else {
        this.#spCountDown.visible = false;
        this.#spGetReady.hidden = false;

        setTimeout(() => {
            this.#spGetReady.hidden = true;
            this.#spTitle.hidden = true;
            startGame(); 
            if(!soundMuted){
                this.#sfRunning.play(); 
            }
        }, getReadyMs);
    }

}

spPlayBtnClick(){
    EGameStatus.state = EGameStatus.countDown; 
    hero.restart();
    obstacles.length = 0;
    baits.length = 0;

    this.#spTitle.hidden = true; 

    this.#spGetReady.hidden = true;
    this.#spGameOverBoard.hidden = true;
    this.#spMedal.hidden = true;
    this.#spFinalScore.visible = false;
    this.#spHighScore.visible = false;
    this.#spGameScore.value = 0;
    this.#spFinalScore.value = 0;


    console.log("CLick!"); 
    this.#spPlayBtn.hidden = true; 

    this.#spCountDown.visible = true; 
    this.#spCountDown.value = 4; 
    this.countDown();

    this.#sfCountDown = new TSoundFile(fnCountDown); 
    this.#sfCountDown.play(); 
}

}
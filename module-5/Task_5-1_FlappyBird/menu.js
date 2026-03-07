"use strict"
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite"; 
import { startGame, EGameStatus, soundMuted } from "./FlappyBird.mjs"; 
import { TSoundFile } from "libSound"; 

const fnCountDown = "./Media/countDown.mp3"; 
const fnRunning = "./Media/running.mp3"; 
const getReadyMs = 1000;

export class TMenu {
    #spTitle; 
    #spPlayBtn; 
    #spCountDown; 
    #sfCountDown; 
    #sfRunning; 
    #spGameScore; 
    #spGetReady; 

    constructor(aSpcvs, aSPI){
         this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 110); 
         this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 190); 
         this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this)); 

         this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 200); 
         this.#spCountDown.visible = false; 

         this.#sfCountDown = null; 
         this.#sfRunning = null; 

         this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 20, 20); 
         this.#spGameScore.alpha = 0.65; 

         this.#spGetReady= new TSprite(aSpcvs, aSPI.infoText, 200, 200);
         this.#spGetReady.index = 0; 
         this.#spGetReady.hidden = true; 
         

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
}

stopSound(){
    this.#sfRunning.stop(); 
}


draw(){
    this.#spTitle.draw(); 
    this.#spPlayBtn.draw(); 
    this.#spCountDown.draw(); 
    this.#spGameScore.draw(); 
    this.#spGetReady.draw(); 
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
    this.#spTitle.hidden = true; 

    this.#spGetReady.hidden = true;


    console.log("CLick!"); 
    this.#spPlayBtn.hidden = true; 

    this.#spCountDown.visible = true; 
    this.#spCountDown.value = 4; 
    this.countDown();

    this.#sfCountDown = new TSoundFile(fnCountDown); 
    this.#sfCountDown.play(); 
}

}
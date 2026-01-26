"use strict"
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite"; 
import { startGame } from "./FlappyBird.mjs"; 
import { TSoundFile } from "libSound"; 

const fnCountDown = "./Media/countDown.mp3"; 
const fnRunning = "./Media/running.mp3"; 

export class TMenu {
    #spTitle; 
    #spPlayBtn; 
    #spCountDown; 
    #sfCountDown; 
    #sfRunning; 

    constructor(aSpcvs, aSPI){
         this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 110); 
         this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 190); 
         this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this)); 

         this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 200); 
         this.#spCountDown.visible = false; 

         this.#sfCountDown = null; 
         this.#sfRunning = null; 
         

    }
stopSound(){
    this.#sfRunning.stop(); 
}


draw(){
    this.#spTitle.draw(); 
    this.#spPlayBtn.draw(); 
    this.#spCountDown.draw(); 
}

countDown(){
    this.#sfRunning = new TSoundFile(fnRunning); 

    if( this.#spCountDown.value > 0 ) { 
    setTimeout(this.countDown.bind(this), 1000); 
    this.#spCountDown.value--; 
    } else {
        this.#spCountDown.visible = false;  
         this.#spTitle.hidden = true; 
        startGame(); 
        this.#sfRunning.play(); 
    }

}

spPlayBtnClick(){
    console.log("CLick!"); 
    this.#spPlayBtn.hidden = true; 

    this.#spCountDown.visible = true; 
    this.#spCountDown.value = 4; 
    this.countDown();

    this.#sfCountDown = new TSoundFile(fnCountDown); 
    this.#sfCountDown.play(); 
}

}
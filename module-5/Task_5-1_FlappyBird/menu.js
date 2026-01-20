"use strict"
import { TSprite, TSpriteButton } from "libSprite"; 
import { startGame } from "./FlappyBird.mjs"; 

export class TMenu {
    #spTitle; 
    #spPlayBtn; 

    constructor(aSpcvs, aSPI){
         this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100); 
         this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180); 
         this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this)); 

    }

draw(){
    this.#spTitle.draw(); 
    this.#spPlayBtn.draw(); 
}

spPlayBtnClick(){
    console.log("CLick!"); 
    this.#spPlayBtn.hidden = true; 
    startGame(); 
}

}
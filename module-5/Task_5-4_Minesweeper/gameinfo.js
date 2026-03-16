"use strict"; 
import { TSpriteNumber, TSpriteButton, ESpriteNumberJustifyType } from "libSprite"; 
import { TPoint } from "lib2d"; 
import { gameLevel, newGame } from "./Minesweeper.mjs";
import { setGameOver } from "./tile.js"; 


export class TGameInfo{
    #leftNumber
    #rightNumber
    #smiley
    #hndTimer; 

    constructor(aSpcvs, aSPI){
        const pos = new TPoint(); 
        pos.x = aSPI.Board.LeftMiddle.width; 
        pos.y = 22; 

        this.#leftNumber = new TSpriteNumber(aSpcvs, aSPI.Numbers, pos.x, pos.y); 
        this.#leftNumber.digits = 3; 
        this.#leftNumber.value = gameLevel.Mines;
        pos.x = aSpcvs.width - 24; 
        this.#rightNumber = new TSpriteNumber(aSpcvs, aSPI.Numbers, pos.x, pos.y); 
        this.#rightNumber.justify = ESpriteNumberJustifyType.Right; 
        this.#rightNumber.digits = 3;  
        pos.x = (aSpcvs.width / 2) - (aSPI.ButtonSmiley.width / 2); 
        this.#smiley =  new TSpriteButton(aSpcvs, aSPI.ButtonSmiley, pos.x, pos.y); 
        this.#hndTimer = setInterval(this.onTime.bind(this), 1000);
        this.#smiley.addEventListener("mousedown", this.#smileyMouseDown.bind(this));
        this.#smiley.addEventListener("mouseup", this.#smileyMouseUp.bind(this)); 
    }

#smileyMouseDown(){
    this.#smiley.index++; 
}

#smileyMouseUp(){
    this.#smiley.index--; 
    newGame(); 
}

//GET and SET FlagCount - LeftNumber 

//get lets you read a value like a property. Property -> a value you access on an object with dot notation. Som for eks: gameInfo.flagCount. 
get flagCount(){
    return this.#leftNumber.value; 
}

//set lets you assign/update a value like a property.
set flagCount(aValue){
    this.#leftNumber.value = aValue; 
}


setSmiley(aIndex){ this.#smiley.index = aIndex; }

/*Bruke funksjon istedenfor for setter (set):
setSmiley(aIndex){ this.#smiley.index = aIndex; }
da i tile.js skriver kode på den her måte: 
createNumbers.setSmileyIndex(1); <- function call
createNumbers.smiley <- property assign*/

stopTimer(){
    clearInterval(this.#hndTimer); 
    this.#hndTimer = null; 
}

draw(){
    this.#leftNumber.draw(); 
    this.#rightNumber.draw(); 
    this.#smiley.draw(); 
}

onTime(){
    this.#rightNumber.value++;
  }

}
"use strict"; 
import { TSpriteNumber, TSpriteButton, ESpriteNumberJustifyType } from "libSprite"; 
import { TPoint } from "lib2d"; 
import { gameLevel } from "./Minesweeper.mjs";


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

    }

//GET and SET FlagCount - LeftNumber 

//get lets you read a value like a property.
get flagCount(){
    return this.#leftNumber.value; 
}

//set lets you assign/update a value like a property.
set flagCount(aValue){
    this.#leftNumber.value = aValue; 
}

// SET Smiley
// siden smiley state forandres ikke utafor kllasen / class, getter er ikke nødvendig. (Smiley sin value forandres ikke i denne file)

set smiley(aIndex){
    this.#smiley.index = aIndex; 
}

/*Bruke funksjon istedenfor for setter (set):
setSmiley(aIndex){ this.#smiley.index = aIndex; }
da i tile.js skriver kode på den her måte: 
createNumbers.setSmileyIndex(1); */

draw(){
    this.#leftNumber.draw(); 
    this.#rightNumber.draw(); 
    this.#smiley.draw(); 
}

onTime(){
    this.#rightNumber.value++;
  }

}
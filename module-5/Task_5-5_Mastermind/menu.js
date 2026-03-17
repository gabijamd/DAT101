"use strict"; 
import { SpriteInfoList, newGame, spcvs } from "./Mastermind.mjs";
import { MastermindBoard } from "./MastermindBoard.mjs";
import { TSprite, TSpriteButton, TSpriteButtonHaptic } from "libSprite";


export class TMenu{
    #board
    #buttonNewGame
    #buttonCheckAnswer
    #buttonCheat
    #panelHideAnswers

    constructor(){
        this.#board = new TSprite(spcvs, SpriteInfoList.Board, 0, 0); 
        this.#buttonNewGame = new TSpriteButtonHaptic(spcvs, SpriteInfoList.ButtonNewGame, MastermindBoard.ButtonNewGame.x ,  MastermindBoard.ButtonNewGame.y); 
        this.#buttonCheckAnswer = new TSpriteButtonHaptic (spcvs, SpriteInfoList.ButtonCheckAnswer, MastermindBoard.ButtonCheckAnswer.x, MastermindBoard.ButtonCheckAnswer.y); 
        this.#buttonCheat = new TSpriteButtonHaptic(spcvs, SpriteInfoList.ButtonCheat, MastermindBoard.ButtonCheat.x, MastermindBoard.ButtonCheat.y); 
        this.#panelHideAnswers = new TSprite( spcvs, SpriteInfoList.PanelHideAnswer, MastermindBoard.PanelHideAnswer.x, MastermindBoard.PanelHideAnswer.y); 

        this.#buttonCheckAnswer.disabled = true; 
        this.#buttonCheat.onClick = this.#cheatOnClick.bind(this);
        this.#buttonNewGame.onClick = this.#newGameOnClick.bind(this); 
        this.#buttonCheckAnswer.onClick = this.#checkAnswerOnClick.bind(this); 
    
 
    }

#checkAnswerOnClick(){
    //TODO : Check player answer!
}

#newGameOnClick(){
    newGame(); 
}


#cheatOnClick(){
    this.#panelHideAnswers.hidden = !this.#panelHideAnswers.hidden; //toggle true = <- false i forhold til den 'true'¨, så i forhold hva den er nå 
} 

drawBackground(){
   this.#board.draw(); 
}

draw(){
    this.#buttonNewGame.draw(); 
    this.#buttonCheckAnswer.draw(); 
    this.#buttonCheat.draw(); 
    this.#panelHideAnswers.draw(); 

}





}// End of TMenu
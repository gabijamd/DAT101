"use strict";

import { SpriteInfoList, spcvs } from "./Mastermind.mjs";
import { MastermindBoard } from "./MastermindBoard.mjs";
import { TSpriteDraggable } from "libSprite";

export class TColorPicker{

    #colorPicker

    constructor(){
         this.#colorPicker = [
            new TSpriteDraggable ( spcvs, SpriteInfoList.ColorPicker, MastermindBoard.ColorPicker.Black.x, MastermindBoard.ColorPicker.Black.y),
            new TSpriteDraggable ( spcvs, SpriteInfoList.ColorPicker, MastermindBoard.ColorPicker.Blue.x, MastermindBoard.ColorPicker.Blue.y),
            new TSpriteDraggable ( spcvs, SpriteInfoList.ColorPicker, MastermindBoard.ColorPicker.Brown.x, MastermindBoard.ColorPicker.Brown.y),
            new TSpriteDraggable ( spcvs, SpriteInfoList.ColorPicker, MastermindBoard.ColorPicker.Green.x, MastermindBoard.ColorPicker.Green.y),
            new TSpriteDraggable ( spcvs, SpriteInfoList.ColorPicker, MastermindBoard.ColorPicker.Orange.x, MastermindBoard.ColorPicker.Orange.y),
            new TSpriteDraggable ( spcvs, SpriteInfoList.ColorPicker, MastermindBoard.ColorPicker.Red.x, MastermindBoard.ColorPicker.Red.y),
            new TSpriteDraggable ( spcvs, SpriteInfoList.ColorPicker, MastermindBoard.ColorPicker.White.x, MastermindBoard.ColorPicker.White.y),
            new TSpriteDraggable ( spcvs, SpriteInfoList.ColorPicker, MastermindBoard.ColorPicker.Yellow.x, MastermindBoard.ColorPicker.Yellow.y)
            
        ]

        this.#colorPicker[0].index = 0; //Black
        this.#colorPicker[1].index = 1; //Blue
        this.#colorPicker[2].index = 2; //Brown
        this.#colorPicker[3].index = 3; //Green
        this.#colorPicker[4].index = 4; //Orange
        this.#colorPicker[5].index = 5; //Red
        this.#colorPicker[6].index = 6; //White
        this.#colorPicker[7].index = 7; //Yellow
    }

    draw(){
         for (const picker of this.#colorPicker) {
        picker.draw();
        }


}

//doSnap from spriteButton -> to snap? 


} //End of TColorPicker
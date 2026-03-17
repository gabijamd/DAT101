"use strict";

import { SpriteInfoList, spcvs } from "./Mastermind.mjs";
import { MastermindBoard } from "./MastermindBoard.mjs";
import { TSpriteDraggable, TSnapTo } from "libSprite";

export class TColorPicker extends TSpriteDraggable{
    #colorPicker

    constructor(aPos){
        super(spcvs, SpriteInfoList.ColorPicker, aPos.x, aPos.y); 
    }

}// End of TColorPicker





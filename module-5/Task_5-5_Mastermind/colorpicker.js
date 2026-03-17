"use strict";

import { SpriteInfoList, spcvs, colorPickers} from "./Mastermind.mjs";
import { MastermindBoard } from "./MastermindBoard.mjs";
import { TSpriteDraggable, TSnapTo } from "libSprite";

export class TColorPicker extends TSpriteDraggable{

    constructor(aPos){
        super(spcvs, SpriteInfoList.ColorPicker, aPos.x, aPos.y); 
    }

    onStartDrag(){
        const index = colorPickers.indexOf(this); 
        colorPickers.splice(index, 1);
        colorPickers.push(this); 
    }

}// End of TColorPicker





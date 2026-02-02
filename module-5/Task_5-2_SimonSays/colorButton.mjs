"use strict";
import { TSpriteButton } from "libSprite";
import { TPoint } from "lib2d"; 

export class TColorButton extends TSpriteButton {
  #dst; 
  #gameBoardCenter; 

  constructor(aSpcvs, aSPI, aGameBoardsCenter){
    super(aSpcvs, aSPI, aSPI.dst.x, aSPI.dst.y ); 
    this.#dst = aSPI.dst;
    this.#gameBoardCenter = aGameBoardsCenter; 
      

  }

  isMouseOver(aMousePos){
    const isOver = super.isMouseOver(aMousePos); 
    if(isOver) {
      const dx = this.#gameBoardCenter.x - aMousePos.x; 
      const dy = this.#gameBoardCenter.y - aMousePos.y; 
      let hyp = Math.pow(dx, 2) + Math.pow(dy, 2);
      hyp = Math.sqrt(hyp); 
      let inside = hyp > this.#dst.r1 && hyp < this.#dst.r2; 
      if(inside){
        return true; 
      }else {
        return false; 
      }
    }
    console.log("Is Over= " + isOver); 
  }

  onMouseDown(){
    // No need to call super
    this.index = 1; 
  }

  onMouseUp(){
    this.index = 0; 
  }


} //End of TColorButton class

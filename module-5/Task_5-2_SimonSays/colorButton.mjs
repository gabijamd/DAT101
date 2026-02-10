"use strict";
import { TSpriteButton } from "libSprite";
import { TPoint } from "lib2d"; 
import { EOctave, ENoteName, Notes, TSoundWave  } from "libSound"; 
import { testOfUserInput } from "./sequence.js";
import { EGameStatusType } from "./SimonSays.mjs";

export class TColorButton extends TSpriteButton {
  #dst; 
  #gameBoardCenter; 
  #sound

  constructor(aSpcvs, aSPI, aGameBoardsCenter){
    super(aSpcvs, aSPI, aSPI.dst.x, aSPI.dst.y ); 
    this.#dst = aSPI.dst;
    this.#gameBoardCenter = aGameBoardsCenter; 
    this.#sound = null;  

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
    if(this.#sound){
      this.#sound.play(); 
    }
  }

  onMouseLeave(aEvent){
    super.onMouseLeave(aEvent); 
    this.index = 0; 
    if(this.#sound){
      this.#sound.stop(); 
    }
  }

  onMouseUp(){
    this.index = 0; 
    if(this.#sound){
      this.#sound.stop(); 
    }
    if(EGameStatusType.state === EGameStatusType.Gamer){
      testOfUserInput(this); 
    }
  }

  createSound(aIndex){
    switch(aIndex){
      case 0: 
      this.#sound = new TSoundWave (EOctave.Octave5, ENoteName.D); 
      break; 

      case 1: 
      this.#sound = new TSoundWave (EOctave.Octave8, ENoteName.C); 
      break; 

      case 2: 
      this.#sound = new TSoundWave (EOctave.Octave7, ENoteName.A); 
      break; 

      case 3: 
      this.#sound = new TSoundWave (EOctave.Octave6, ENoteName.A); 
      break; 
      
    }
  }


} //End of TColorButton class

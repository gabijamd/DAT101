"use strict"; 
import {TSprite } from "libSprite"; 

export class TBackground {
    #spriteBackground;
    #spriteGround; 
    #groundSpeed = 0.3; 

    constructor(aSpcvs, aSPI){
        this.#spriteBackground = new TSprite(aSpcvs, aSPI.background, 0,0);
        const groundPosY = aSPI.background.height - aSPI.ground.height;  
        this.#spriteGround = new TSprite(aSpcvs, aSPI.ground, 0, groundPosY); 
    }


    draw(){
        this.#spriteBackground.draw(); 
        
        this.#spriteGround.x -= this.#groundSpeed;
        if (this.#spriteGround.x <= -this.#spriteGround.width / 2) {
            this.#spriteGround.x = 0; 
        }

        this.#spriteGround.draw(); 
    
    }

}


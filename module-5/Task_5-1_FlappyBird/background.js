"use strict"; 
import {TSprite } from "libSprite"; 

export class TBackground {
    #spriteBackground;
    #spriteGround; 


    constructor(aSpcvs, aSPI){
        this.#spriteBackground = new TSprite(aSpcvs, aSPI.background, 0,0);
        const groundPosY = aSPI.background.height - aSPI.ground.height;  
        this.#spriteGround = new TSprite(aSpcvs, aSPI.ground, 0, groundPosY);
  
    }



    drawBackground(){
        this.#spriteBackground.draw(); 

    }

    drawGround(){
        this.#spriteGround.draw(); 
    }

    animate() {
        const x = this.#spriteGround.x + (this.#spriteGround.width / 2); // halverer ground størelse for å finne bredden til det som vises 
        if(x < 5 ) {
           this.#spriteGround.x = 0;  // reseter ground background med engang den er mindre en 0
        } else {  this.#spriteGround.x--;  } // trekker ned ground med 1 px hele tiden
        
    }

}


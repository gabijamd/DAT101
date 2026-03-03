"use strict"; 

import { TSpriteButton } from "libSprite"; 
import { TPoint } from "lib2d"; 
import { gameLevel } from "./Minesweeper.mjs";

let tiles = []; 

export class TTile extends TSpriteButton {
    #mine

    constructor(aSpcvs, aSPI, aCol, aRow ){
        const pos = new TPoint(20, 133); 
        pos.x += aSPI.width * aCol; 
        pos.y += aSPI.height * aRow; 
        super(aSpcvs, aSPI, pos.x, pos.y); 
        this.#mine = false; 
    }

    get isMine(){
        return this.#mine; 
    }

    set isMine(aValue){
    this.#mine = aValue; 
    }

    get open(){
        return this.index === 2; 
    }

//----------- OVERIDE FUNCTIONS -------------------------------------------------------------
onMouseDown(aEvent){
    this.index = 1; 
    super.onMouseDown(aEvent); 
} //mouseDown

onMouseUp(aEvent){
    this.index = 2; 
    super.onMouseUp(aEvent);
}// mouseUp

onMouseLeave(aEvent){
    if(this.open === false){
       this.index = 0; 
    }
    
    super.onMouseLeave(aEvent); 
}//MouseLeave

}// End of TTile

//-----------------------------------------------------------------------------------------
//----------- FUNCTIONS -------------------------------------------------------------------
//-----------------------------------------------------------------------------------------

export function createMines(){
    mineCount = 0; 
    colCount = gameLevel.Tiles.Col; 
    rowCount = gameLevel.Tiles.Row; 
    do{
        const col = Math.floor(Math.random()* colCount); 
        const row = Math.floor(Math.random()* rowCount); 
        const tile = tiles[col][row]; 
        if(tile.isMine === false){
            tile.isMine = true; 
            mineCOunt++; 
        }//if
    }while(mineCount <= gameLevel.Mines); 
}//end of createMines

export function createTiles (aSpcvs, aSPI ){
    console.log(gameLevel); 
    const glTiles = gameLevel.Tiles;
    const colCount = glTiles.Col;  
    const rowCount = glTiles.Row; 

     for(let col = 0; col < colCount; col++){
        const rows = []; 
         for( let row = 0; row < rowCount; row++){
         const newTile = new TTile(aSpcvs, aSPI, col, row); 
         rows.push(newTile); 

    } //row
       tiles.push(rows); 
    } //col

}// end of createTiles

export function drawTiles(){
    const colCount = gameLevel.Tiles.Col; 
    const rowCount = gameLevel.Tiles.Row; 
    for(let col = 0; col < colCount; col++ ){
       const rows = tiles[col];
       for( let row = 0; row < rowCount; row++){
        const tile = rows[row]; 
        tile.draw();
       }
         
    }

}// end og drawTiles


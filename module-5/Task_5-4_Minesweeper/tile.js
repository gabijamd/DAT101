"use strict"; 

import { TSpriteButton } from "libSprite"; 
import { TPoint } from "lib2d"; 
import { gameLevel } from "./Minesweeper.mjs";

let tiles = []; 

export class TTile extends TSpriteButton {
    #mine; 
    #col;
    #row;

    constructor(aSpcvs, aSPI, aCol, aRow ){
        const pos = new TPoint(20, 133); 
        pos.x += aSPI.width * aCol; 
        pos.y += aSPI.height * aRow; 
        super(aSpcvs, aSPI, pos.x, pos.y); 
        this.#mine = false; 
        this.#col = aCol;
        this.#row = aRow; 
    }

//GET and SET 

    get isMine(){
        return this.#mine; 
    }

    set isMine(aValue){
    this.#mine = aValue; 
    }

    get open(){
        return this.index === 2; 
    }

#getNeighbors(){
    let colFrom = this.#col - 1; 
    let colTo = this.#col + 1; 
    let rowFrom = this.#row - 1; 
    let rowTo = this.#row + 1;  

    if(colFrom < 0){ colFrom = 0; }
    if(rowFrom < 0){ rowFrom =0; }
    if(colTo >= gameLevel.Tiles.Col){ colTo = gameLevel.Tiles.Col - 1;}
    if(rowTo >= gameLevel.Tiles.Row){ rowTo = gameLevel.Tiles.Row - 1;}

    const neighbors = []; 
    for(let colIndex = colFrom; colIndex <= colTo; colIndex++ ){
        for(let rowIndex = rowFrom; rowIndex <= rowTo; rowIndex++){
            const tile = tiles[colIndex][rowIndex]; 
            
        }
    }
}//end of Neighbors 

//----------- OVERIDE FUNCTIONS -------------------------------------------------------------
onMouseDown(aEvent){
    this.index = 1; 
    super.onMouseDown(aEvent); 
} //mouseDown

onMouseUp(aEvent){
    this.open(); 
    super.onMouseUp(aEvent);
}// mouseUp

onMouseLeave(aEvent){
    if(this.open === false){
       this.index = 0; 
    }
    
    super.onMouseLeave(aEvent); 
}//MouseLeave


//FUNCTIONS

open(){
    if(this.isMine){
        this.index = 5; 
    }else{
        this.index = 2; 
    }
}

}// End of TTile

//----------- FUNCTIONS -------------------------------------------------------------------

export function createMines(){
    let mineCount = 0; 
    let colCount = gameLevel.Tiles.Col; 
    let rowCount = gameLevel.Tiles.Row; 
    do{
        const col = Math.floor(Math.random()* colCount); 
        const row = Math.floor(Math.random()* rowCount); 
        const tile = tiles[col][row]; 
        if(tile.isMine === false){
            tile.isMine = true; 
            mineCount++; 
        }
    }while(mineCount < gameLevel.Mines); 
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


"use strict"; 

import { TSpriteButton } from "libSprite"; 
import { TPoint } from "lib2d"; 
import { gameLevel } from "./Minesweeper.mjs";

const MineInfoColors = ["Chocolate", "DarkGreen", "FireBrick", "GoldenRod", "brown", "RebeccaPurple", "Navy", "DarkSeaGreen"];
let tiles = []; 
const ctx = document.getElementById("cvs").getContext("2d"); 

export class TTile extends TSpriteButton {
    #mine; 
    #col;
    #row;
    #neighbors; 

    constructor(aSpcvs, aSPI, aCol, aRow ){
        const pos = new TPoint(20, 133); 
        pos.x += aSPI.width * aCol; 
        pos.y += aSPI.height * aRow; 
        super(aSpcvs, aSPI, pos.x, pos.y); 
        this.#mine = false; 
        this.#col = aCol;
        this.#row = aRow; 
        this.#neighbors = null; 
        this.mineInfo = 0; 
        
    }

//GET and SET 

    get isMine(){
        return this.#mine; 
    }

    set isMine(aValue){
        this.#mine = aValue;
        this.mineInfo = 0; 
        this.#getNeighbors();
        for(let i = 0; i < this.#neighbors.length; i++){
            const tile = this.#neighbors[i];
            if(tile.isMine === false){
                tile.mineInfo++; 
            } 
        }

    }

    get open(){
        return this.index === 2 || this.index == 5; 
    }

draw(){
    super.draw();
    if(this.open && this.mineInfo){
    ctx.font = "35px Monospace"; 
    ctx.fillStyle = MineInfoColors[this.mineInfo - 1]; 
    ctx.fillText(this.mineInfo, this.x + 16, this.y + 35);
    } 
}// end of draw

#getNeighbors(){
    if(this.#neighbors !== null){
        return; 
    }

    let colFrom = this.#col - 1; 
    let colTo = this.#col + 1; 
    let rowFrom = this.#row - 1; 
    let rowTo = this.#row + 1;  

    if(colFrom < 0){ colFrom = 0; }
    if(rowFrom < 0){ rowFrom = 0; }
    if(colTo >= gameLevel.Tiles.Col){ colTo = gameLevel.Tiles.Col - 1;}
    if(rowTo >= gameLevel.Tiles.Row){ rowTo = gameLevel.Tiles.Row - 1;}

    this.#neighbors = []; 
    for(let colIndex = colFrom; colIndex <= colTo; colIndex++ ){
        for(let rowIndex = rowFrom; rowIndex <= rowTo; rowIndex++){
            const tile = tiles[colIndex][rowIndex]; 
            if(this !== tile){
                this.#neighbors.push(tile); 
            }
        }
    }
}//end of Neighbors 

//----------- OVERIDE FUNCTIONS -------------------------------------------------------------
onMouseDown(aEvent){
    this.index = 1; 
    super.onMouseDown(aEvent); 
} //mouseDown

onMouseUp(aEvent){
    this.open = true; 
    super.onMouseUp(aEvent);
}// mouseUp

onMouseLeave(aEvent){
    if(this.open === false){
       this.index = 0; 
    }
    
    super.onMouseLeave(aEvent); 
}//MouseLeave


//FUNCTIONS

set open(_aValue){
    if(this.isMine){
        this.index = 5; 
    }else{
        this.index = 2; 
    }
    if(this.mineInfo === 0){
    this.#getNeighbors(); 
    for(let i=0; i < this.#neighbors.length; i++){
        const tile = this.#neighbors[i]; 
        if(tile.open === false){
        tile.open = true; }
    } //end of for
}
 } // end of if

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





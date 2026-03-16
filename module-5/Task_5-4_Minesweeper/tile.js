"use strict";

import { TSpriteButton } from "libSprite";
import { TPoint } from "lib2d";
import { gameLevel, createNumbers } from "./Minesweeper.mjs";

const MineInfoColors = ["Chocolate", "DarkGreen", "FireBrick", "GoldenRod", "brown", "RebeccaPurple", "Navy", "DarkSeaGreen"];
let tiles = [];
const ctx = document.getElementById("cvs").getContext("2d");
let gameOver = false;
let tilesRemaining = 0;

export class TTile extends TSpriteButton {
  #mine;
  #col;
  #row;
  #neighbors;

  constructor(aSpcvs, aSPI, aCol, aRow) {
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

  get isMine() {
    return this.#mine;
  }

  set isMine(aValue) {
    this.#mine = aValue;
    this.mineInfo = 0;
    this.#getNeighbors();
    for (let i = 0; i < this.#neighbors.length; i++) {
      const tile = this.#neighbors[i];
      if (tile.isMine === false) {
        tile.mineInfo++;
      }
    }
  }

  get open() {
    return this.index === 2 || this.index == 5;
  }

  draw() {
    super.draw();
    if (this.open && this.mineInfo) {
      ctx.font = "35px Monospace";
      ctx.fillStyle = MineInfoColors[this.mineInfo - 1];
      ctx.fillText(this.mineInfo, this.x + 16, this.y + 35);
    }
  } // end of draw

  #getNeighbors() {
    if (this.#neighbors !== null) {
      return;
    }

    let colFrom = this.#col - 1;
    let colTo = this.#col + 1;
    let rowFrom = this.#row - 1;
    let rowTo = this.#row + 1;

    if (colFrom < 0) {
      colFrom = 0;
    }
    if (rowFrom < 0) {
      rowFrom = 0;
    }
    if (colTo >= gameLevel.Tiles.Col) {
      colTo = gameLevel.Tiles.Col - 1;
    }
    if (rowTo >= gameLevel.Tiles.Row) {
      rowTo = gameLevel.Tiles.Row - 1;
    }

    this.#neighbors = [];
    for (let colIndex = colFrom; colIndex <= colTo; colIndex++) {
      for (let rowIndex = rowFrom; rowIndex <= rowTo; rowIndex++) {
        const tile = tiles[colIndex][rowIndex];
        if (this !== tile) {
          this.#neighbors.push(tile);
        }
      }
    }
  } //end of Neighbors

  //----------- OVERIDE FUNCTIONS -------------------------------------------------------------
  onMouseDown(aEvent) {
    console.log(aEvent.button);
    if (gameOver) {
      return;
    } //blokkerer å kunne trykke eller gjøre noe mer etter gameOver
    if (this.open) {
      return;
    } // om tile er open, kan man ikke gjøre / trykke noe mer
    if (aEvent.button === 0 && this.index !== 3) {
      this.index = 1;
      createNumbers.setSmiley(1);
      //createNumbers.smiley = 1;
    } else if (aEvent.button === 2) {
      this.index = 3 - this.index; //eksamens pensum - toggle
      if (this.index === 3) {
        if (createNumbers.flagCount > 0) {
          createNumbers.flagCount--;
        } else {
          this.index = 0;
        }
      } else {
        createNumbers.flagCount++;
      }
    }

    super.onMouseDown(aEvent);
  } //mouseDown

  onMouseUp(aEvent) {
    if (gameOver) {
      return;
    }
    if (aEvent.button === 2 || this.index === 3) {
      return;
    }
    createNumbers.setSmiley(0);
    //createNumbers.smiley = 0;
    this.open = true;
    super.onMouseUp(aEvent);
  } // mouseUp

  onMouseLeave(aEvent) {
    if (gameOver) {
      return;
    }
    if (this.index === 1) {
      this.index = 0;
      createNumbers.setSmiley(0);
      //createNumbers.smiley = 0;
      super.onMouseLeave(aEvent);
    }
  } //MouseLeave

  //FUNCTIONS

  set open(_aValue) {
    if (this.isMine) {
      setGameOver();
      this.index = 4;
      //Game over!
      return;
    } else {
      this.index = 2;
      tilesRemaining--; 
      if(tilesRemaining === gameLevel.Mines){
        gameOver = true; 
        createNumbers.setSmiley(4); 
        createNumbers.stopTimer(); 
      }
    }
    if (this.mineInfo === 0) {
      this.#getNeighbors();
      for (let i = 0; i < this.#neighbors.length; i++) {
        const tile = this.#neighbors[i];
        if (tile.open === false) {
          tile.open = true;
        }
      } //end of for
    }
  } // end of if
} // End of TTile

//----------- FUNCTIONS -------------------------------------------------------------------


export function setGameOver() {
  gameOver = true;
  //createNumbers.smiley = 2;
  createNumbers.setSmiley(2);
  createNumbers.stopTimer();
  for (let colIndex = 0; colIndex < gameLevel.Tiles.Col; colIndex++) {
    const cols = tiles[colIndex];
    for (let rowIndex = 0; rowIndex < gameLevel.Tiles.Row; rowIndex++) {
      const tile = cols[rowIndex];
      if (tile.isMine) {
        if (tile.index === 3) {
          tile.index = 7;
        } else {
          tile.index = 5;
        }
      } else if (tile.index === 3) {
        tile.index = 6;
      }
    }
  }
}

export function createMines() {
  let mineCount = 0;
  let colCount = gameLevel.Tiles.Col;
  let rowCount = gameLevel.Tiles.Row;
  do {
    const col = Math.floor(Math.random() * colCount);
    const row = Math.floor(Math.random() * rowCount);
    const tile = tiles[col][row];
    if (tile.isMine === false) {
      tile.isMine = true;
      mineCount++;
    }
  } while (mineCount < gameLevel.Mines);
} //end of createMines

export function createTiles(aSpcvs, aSPI) {
  console.log(gameLevel);
  const glTiles = gameLevel.Tiles;
  const colCount = glTiles.Col;
  const rowCount = glTiles.Row;
  gameOver = false;
  tiles = [];
  tilesRemaining = 0; 
  for (let col = 0; col < colCount; col++) {
    const rows = [];
    for (let row = 0; row < rowCount; row++) {
      const newTile = new TTile(aSpcvs, aSPI, col, row);
      rows.push(newTile);
      tilesRemaining++; 
    } //row
    tiles.push(rows);
  } //col
} // end of createTiles

export function drawTiles() {
  const colCount = gameLevel.Tiles.Col;
  const rowCount = gameLevel.Tiles.Row;
  for (let col = 0; col < colCount; col++) {
    const rows = tiles[col];
    for (let row = 0; row < rowCount; row++) {
      const tile = rows[row];
      tile.draw();
    }
  }
} // end og drawTiles

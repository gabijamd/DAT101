"use strict";
import {  EGameStatusType, spawnColorButton, gameOver, updateRound } from "./SimonSays.mjs"

let colorButton = null; 
let sequence = []; 
let round = 0; 
let seqIndex = 0; 

export function resetSequence(){
        sequence = [];
        round = 0; 
        seqIndex = 0; 
}

export function addRandomButton(aColorButtons){
    const index = Math.floor(Math.random() * aColorButtons.length); 
    colorButton = aColorButtons[index]; 
    sequence.push(colorButton); 
    seqIndex = 0; 
    colorButton = sequence[0]; 
    setTimeout(setButtonDown, 500); // this is the wait time before sequence start
}

export function testOfUserInput(aColorButton){
    if(aColorButton === colorButton){
        console.log("Yay")
        seqIndex++; 
        if(seqIndex < sequence.length){
            //We have not reach the end of sequence.
            colorButton = sequence[seqIndex]; 
        }else {
            round++; 
            updateRound(round); 
            spawnColorButton(); 
        }
    } else {
        console.log("Oh no :'(");
        gameOver(); 
    }
}

function setButtonDown(){
    colorButton.onMouseDown(); 
    setTimeout(setButtonUp, 200); 
}

function setButtonUp(){
    colorButton.onMouseUp(); 
    seqIndex++; 
    if(seqIndex < sequence.length){
        colorButton= sequence[seqIndex]; 
        setTimeout(setButtonDown, 500); 
    }else{
        EGameStatusType.state = EGameStatusType.Gamer; 
        seqIndex = 0; 
        colorButton = sequence[0]; 
    }

}
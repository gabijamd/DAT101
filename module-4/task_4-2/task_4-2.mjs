"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const part1Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; 

printOut("Lengde = " + part1Array.length + ", Verdi =  " + part1Array[part1Array.length - 1]); 

let part1Text = ""; 
for(let i = 0; i</*20*/ part1Array.length; i++ /* i = i +1 */ ) {
 const value = part1Array[i]; // -> Every index of part1Array
 if(i === part1Array.length - 1){
    part1Text += value.toString() +"."; 
 }else {
 part1Text += value.toString() +", "; }
}

printOut(part1Text);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const part2Text = part1Array.join(" + ")

printOut(part2Text);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Greeting = "Hello there, how are you?";
const greetingArray = part3Greeting.split(" "); 
let part3Text = ""; 
for( let i=0; i<greetingArray.length; i++){
    const word = greetingArray[i]; 
    // Here can you remove unwanted characters e.g: , ? et. 
    part3Text += "Index: " + i.toString() + " = " +word + newLine; 
}
printOut(part3Text); 


printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const girls = [ "Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid",
"Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin" ]; 

function removeNameFromArray(aArray, aName){
    let deleteIndex = -1; 
    for(let i = 0; i < aArray.length; i++ ) {
        const name = aArray[i]; 
        if(name === aName){
            // Her kan vi slette elementet for eksempel "Hilde"
            //Dette gjør vi ikke her! Her løper vi igjen, og må slette senere!
            // Vi må lagre indeksen i en variable.
            deleteIndex = i;  
            break; 
        }
    }
    // Teste om jeg kan slette
    if(deleteIndex >= 0){
        printOut(aName + " is found, and deleted."); 
        aArray.splice(deleteIndex, 1);
    } else {
        printOut(aName + " is not found"); 
    }
}
removeNameFromArray(girls, "Hilde"); 
printOut(girls); 

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const boys = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah",
"Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor",
"Magnus" ]; 

const boysAndGirls = girls.concat(boys); 

printOut(boysAndGirls);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* 
1. Create a class named TBook
2. Let the constructor fill in the three attributes (title, author, and ISBN number). 
3. Create a public function "toString" in the class, it should return a text string that contains the three attributes of the class.
4.Create an array that contains three instances of the TBook class. Use a loop to print out the books that are in the list.
*/

class TBook {
#Title
#Author
#ISBN

    constructor(aTitle, aAuthor, aISBN) { 
    this.#Title = aTitle; 
    this.#Author = aAuthor; 
    this.#ISBN = aISBN;  }

    TBookString (){
        return `Title: ${this.#Title}, Author: ${this.#Author}, ISBN: ${this.#ISBN}`; // returning multiple private elements 
    }
}
const book1 = new TBook ("Harry Potter and the Sorcerer's Stone ", "J.K. Rowling ", "9781781100486" )
const book2 = new TBook("The Hobbit", "J.R.R. Tolkien", "9780547928227");
const book3 = new TBook("1984", "George Orwell", "9780451524935");
const bookArray = [book1, book2, book3]; 
let part6Text = "";
for (const book of bookArray) {
  part6Text += book.TBookString() + "<br>";
}

printOut(part6Text);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

/* 
1. Use this function: Object.keys(EWeekDays) to create an array with the "keys" that exist in the EWeekDays object.
2. Create a loop that traverses this "key" array and prints all the elements that exist in the EWeekDays object*/

const EWeekDays = {
    WeekDay1: { value: 0x01, name: "Mandag" },
    WeekDay2: { value: 0x02, name: "Tirsdag" },
    WeekDay3: { value: 0x04, name: "Onsdag" },
    WeekDay4: { value: 0x08, name: "Torsdag" },
    WeekDay5: { value: 0x10, name: "Fredag" },
    WeekDay6: { value: 0x20, name: "Lørdag" },
    WeekDay7: { value: 0x40, name: "Søndag" },

    Workdays: {
        value: 0x01 + 0x02 + 0x04 + 0x08 + 0x10,
        name: "Arbeidsdager"
    },

    Weekends: {
        value: 0x20 + 0x40,
        name: "Helg"
    },
};

const weekDayKeys = Object.keys(EWeekDays); 
let part7Text = "";
for (const key of weekDayKeys) {
    const day = EWeekDays[key];
    part7Text += `${key}: Value = ${day.value}, Name = ${day.name}` + newLine;
}
printOut(part7Text);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* 
1. Create an array that contains 35 random numbers from 1 to 20 (inclusive). Sort these arrays in ascending and descending order. 
2. To get full credit for this task, it must be solved with "callback" functions that you
use in the .sort(...) method of this array.!*/

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

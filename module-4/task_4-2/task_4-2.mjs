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
/* Create a constant that contains the text "Hei på deg, hvordan har du det?" (Hello there, how are you?)
Take this text and convert it into an array that contains all the words in the text, i.e., each element should
contain only one word from the text. Use a loop to traverse (run through) this array so that you can print
which word number, which index the word is at, and the word itself.!*/
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

// "Hard-coded" array with objects inside it -> writing the items of the array directly in the code, instead of creating them with a loop or a function. 

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

//Blueprint for book objects
class TBook {
#Title
#Author
#ISBN

    constructor(aTitle, aAuthor, aISBN) { 
    this.#Title = aTitle; 
    this.#Author = aAuthor; 
    this.#ISBN = aISBN;  }

    //Public method to use the class
    TBookString (){
        return `Title: ${this.#Title}, Author: ${this.#Author}, ISBN: ${this.#ISBN}`; // returning a text string that contains the three attributes of the class.
    }
}

// 3 objects that uses blueprint of Tbook class 
const book1 = new TBook ("Harry Potter and the Sorcerer's Stone ", "J.K. Rowling ", "9781781100486" )
const book2 = new TBook("The Hobbit", "J.R.R. Tolkien", "9780547928227");
const book3 = new TBook("1984", "George Orwell", "9780451524935");

// Array of the books
const bookArray = [book1, book2, book3]; 
let part6Text = "";

// Shortest way to printOut all the books. (with for .. of)
for (const book of bookArray) {

// part6Text = Purpose is: collect all the text first, then print it.
  part6Text += book.TBookString() + "<br>";

   //printOut(book.TBookString()); <- mulig også skrive på denne måten, men da den samler ikke all teksten/bøker sammen til en 'string'. Ved å ha part6Text lagrer man informasjon in en variabel. 
}

printOut(part6Text);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

/* 
1. Use this function: Object.keys(EWeekDays) to create an array with the "keys" that exist in the EWeekDays object.
2. Create a loop that traverses this "key" array and prints all the elements that exist in the EWeekDays object*/


// An object
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

// Lets for.. of to access the elements from the object 
const weekDayKeys = Object.keys(EWeekDays); 
// array of all the keys : ["WeekDay1", "WeekDay2", "WeekDay3", "WeekDay4", "WeekDay5", "WeekDay6", "WeekDay7", "Workdays", "Weekends"]. It makes a list of all the property names in your object.

let part7Text = "";

// "of" is a special type of loop in JavaScript used to go through the items of an array one by one. "of" basically means: “for each item in this array, do the following…” 

//"key" → is a variable, that is a one item from the array at a time. Each time the loop runs, key will hold the current item from the array weekDayKeys.  
// weekDayKeys -> array created from object EWeekDays. 

for (const key of weekDayKeys) {
    const day = EWeekDays[key];
    part7Text += `${key}: Value = ${day.value}, Name = ${day.name}` + newLine;
    // printOut(key, EWeekDays[key]); // 
}
printOut(part7Text);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* 
1. Create an array that contains 35 random numbers from 1 to 20 (inclusive). Sort these arrays in ascending and descending order. 
2. To get full credit for this task, it must be solved with "callback" functions that you
use in the .sort(...) method of this array.!*/

const rNum = []; // tom tabell 

// setter inn verdier inni tabellen 
for (let i = 0; i < 35; i++) {
    rNum.push(Math.floor(Math.random() * 20) + 1);
}

rNum.sort((a, b) => a - b); //sorterer 
printOut("Array with 35 random numbers from 1-20: " + "</br>" + rNum.join(", "));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Based on part 8, print out how many times the different numbers occur in the array. 

1. First, print the numbers and their frequency, 
2. then print the frequencies and which numbers they correspond to.
     You must print the most frequent ones first, and if there are multiple numbers where the frequency is the same, 
        then it should again be sorted from the smallest to the largest number.*/


// Count frequency using Map
const frequencyNum = new Map(); 
for (const item of rNum) {
  frequencyNum.set(item, (frequencyNum.get(item) || 0) + 1);
}

// Print numbers with their frequency
printOut("Numbers with their frequency:");
for (const [num, freq] of frequencyNum) {
  printOut(`${num}: ${freq}`);
}

// Create a map of frequency -> array of numbers
const freqToNumbers = new Map();
for (const [num, freq] of frequencyNum) {
  if (!freqToNumbers.has(freq)) freqToNumbers.set(freq, []);
  freqToNumbers.get(freq).push(num);
}

// sort numbers within same frequency
for (const nums of freqToNumbers.values()) {
  nums.sort((a, b) => a - b);
}

// Print frequencies sorted descending
const sortedFrequencies = Array.from(freqToNumbers.keys()).sort((a, b) => b - a);
printOut("Frequencies with corresponding numbers:");
for (const freq of sortedFrequencies) {
  printOut(`${freq}: ${freqToNumbers.get(freq).join(", ")}`);
}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Create an array that contains rows and columns (2 dimensions, 5x9).
1) Start with an empty array. 
2) Use "for" loops to create rows and columns, respectively. 
3) In each "cell," create a text that shows which row and column the "cell" is in.
 Then create two new sets of "for" loops to print the array itself.

○ Hint: For each round in the loop for the rows, you create a column. And for each round in the columns, you write the "cell" value.Put your code below here!*/

const dimArr = []; //tom array
const row = 5; // dimensjon
const column = 9; //dimensjon 

// for loop 
// først man bygger rows, lager rowsArray som man legger columns inn med en for loop
for( let r=0; r<row; r++){
    const rowArray = []; 
    for( let c=0; c<column; c++){
        rowArray.push(`Row ${r + 1}, Col ${c + 1}`); //Cell tekst 
    }
    dimArr.push(rowArray); // Add the row to dimArr
}

let part10Text = ""; 
for(let r = 0; r < row; r++){
  for(let c = 0; c < column; c++){
    part10Text += dimArr[r][c] + " | ";
  }
  part10Text += newLine;
}

printOut(part10Text); 


printOut(newLine);

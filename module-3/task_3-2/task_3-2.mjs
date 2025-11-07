"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let textLine1= "";
let textLine2 = ""; 
for (let i = 1, j= 10; i<=10; i++, j--) {
    textLine1 += " " + i.toString(); 
    textLine2 += " " + j.toString(); 
}

printOut(textLine1 + newLine);
printOut(textLine2 + newLine);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let randomNumber; 

do { 
    randomNumber = Math.floor(Math.random()*60)+1; 
}while (randomNumber !== 45); 

printOut("Genarating random number until the code 'guesses' the number 45 = " + randomNumber);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let randomNumber2; 
let guesses2 = 0; // counter for number of guesses

const startTime = Date.now(); // starts counting time 

do {
    randomNumber2 = Math.floor(Math.random()*1e6)+1; 
    guesses2++; // increase counter every guess
} while (randomNumber2 !== 1250); 


const  endTime= Date.now(); // stops counting 
const takenTime = endTime - startTime; 

printOut("The random number is " + randomNumber2);
printOut("Time it took to calculate: " + takenTime + " milliseconds" ); 
printOut("It took " + guesses2 + " guesses to find number 1250");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let primeNumbers4 = ""; 
for (let i = 2; i <=200; i++) {
    let j = i - 1; 
    let isPrime = true; 
    while(j> 1 && isPrime) {
        let rest = i % j; 
        isPrime = rest != 0; 
        j--; 
    }
    if(isPrime) {
    primeNumbers4 += " " + i; 
    }
}

printOut("All the prime numbers from 1 to 200= " + primeNumbers4);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

for (let i=1; i<=7; i++) {
    let rowR = "";
    for ( let j=1; j<=9; j++) {
        rowR += "K" + j + "R" + i + " "; 
    }
    printOut(rowR.trim());
}


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const maxGrade = 236; 

const gradeAmin = 0.89 * maxGrade; const gradeAmax = maxGrade; 
const gradeBmin = 0.77 * maxGrade; const gradeBmax = 0.88 * maxGrade; 
const gradeCmin = 0.65 * maxGrade; const gradeCmax = 0.76 * maxGrade; 
const gradeDmin = 0.53 * maxGrade; const gradeDmax = 0.64 * maxGrade;
const gradeEmin = 0.41 * maxGrade; const gradeEmax = 0.52 * maxGrade; 
const gradeFmin = 0; const gradeFmax = 0.40 * maxGrade; 

function getGrade(points) {
    if (points >= gradeAmin) return "A";
    else if (points >= gradeBmin) return "B";
    else if (points >= gradeCmin) return "C";
    else if (points >= gradeDmin) return "D";
    else if (points >= gradeEmin) return "E";
    else return "F";
}

for (let i = 1; i <= 5; i++) {
    let randomGrade;
    let gradeType;

    do {
        randomGrade = Math.floor(Math.random() * maxGrade) + 1;
        gradeType = getGrade(randomGrade);
        break; 
    } while (true);

    let percentage = (randomGrade / maxGrade * 100).toFixed(1);

    printOut(
        "Student " + i + 
        " got " + randomGrade + " points (" + percentage + "%). Grade " + gradeType + "."
    );
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

/* 1 2 3 4 5 6 (full straight) */ 

let diceRoll = ""; 
let throws = 0; 
let straightLine = ""; 

for (let i = 1; i <= 6; i++) {
    do {
    diceRoll = Math.floor(Math.random() * 6) + 1;
    throws += 1; 

    } while ( diceRoll !== i); 

   straightLine += diceRoll + " "; 
}

/* 3 pairs */ 

let diceRoll2 = ""; 
let throws2 = 0;

let pairOne = "";
let pairOne2 = "";
let pairTwo = "";
let pairTwo2 = "";
let pairThree = ""; 
let pairThree2 = ""; 

do {
    diceRoll2 = Math.floor(Math.random() * 6) + 1;
    throws2 += 1;

    if (pairOne === "") {
        pairOne = diceRoll2;
    } else if (pairOne2 === "" && diceRoll2 === pairOne) {
        pairOne2 = diceRoll2;
    }

    else if (pairTwo === "" && diceRoll2 !== pairOne) {
        pairTwo = diceRoll2;
    } else if (pairTwo2 === "" && diceRoll2 === pairTwo) {
        pairTwo2 = diceRoll2;
    }

    else if (pairThree === "" && diceRoll2 !== pairOne && diceRoll2 !== pairTwo) {
        pairThree = diceRoll2;
    } else if (pairThree2 === "" && diceRoll2 === pairThree) {
        pairThree2 = diceRoll2;
    }

} while (pairOne2 === "" || pairTwo2 === "" || pairThree2 === "");



/*All the same (Yahtzee) (ikke ferdig)*/

let throws4 = 0;
let d1, d2, d3, d4, d5, d6; 

do {
  throws4++;

  // Roll 6 dice
    d1 = Math.floor(Math.random() * 6) + 1;
    d2 = Math.floor(Math.random() * 6) + 1;
    d3 = Math.floor(Math.random() * 6) + 1;
    d4 = Math.floor(Math.random() * 6) + 1;
    d5 = Math.floor(Math.random() * 6) + 1;
    d6 = Math.floor(Math.random() * 6) + 1;

} while (!(d1 === d2 && d2 === d3 && d3 === d4 && d4 === d5 && d5 === d6));


printOut("It took " + throws + " tries to get " + straightLine + " dice roll" );
printOut("It took " + throws2 + " tries to get 3 pairs = " +  pairOne + "-" + pairOne2 + ", " + pairTwo + "-" + pairTwo2 + ", " + pairThree + "-" + pairThree2);
printOut("It took " + throws4 + " tries to get " + d1 + d2 + d3+ d4+ d5 + d6 +  " Yahtzee dice roll" );
printOut(newLine);

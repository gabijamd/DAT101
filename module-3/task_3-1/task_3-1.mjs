"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Task 1, 2 and 3");

const yesBus = "I can catch the bus to school"; 
const noBus = "I have to take car to school"; 
const train = "I can take the train to school"

let wakeUpTime1 = 7;
let busTime = 7; 

if (wakeUpTime1 == busTime ) {
  printOut("The time is " + wakeUpTime1 + ". " + yesBus);
}else if (wakeUpTime1 == 8 ) {
  printOut("The time is " + wakeUpTime1 + ". " + train); 
}else {
  printOut("The time is " + wakeUpTime1 + ". " + noBus); 
}

printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const negativeIV = "Negative";
const positiveIV = "Positive"; 
const zeroIV = "0"

let givenNumber = 5; 

if ( givenNumber == 0) {
  printOut("The given number is " + zeroIV); 
}
else if(givenNumber <0){
  printOut("The given number " + givenNumber +" is "+ negativeIV);
} else {
  printOut ("The given number " + givenNumber +" is "+ positiveIV); 
}

printOut(newLine);

printOut("--- Part 6, 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const goodSize = "Thank you"; 
const smallSize = "The image is too small";
const largeSize = "The image is too large"; 

let imageSize = Math.floor(Math.random() * 8) + 1; 

if(imageSize > 6){
  printOut("The photo size is " + imageSize + " , "+  largeSize); 
} else if (imageSize > 3){
  printOut("The photo size is " + imageSize + " , "+ goodSize);
} else {
  printOut("The photo size is " + imageSize + " , "+ smallSize);
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];

const daysInMonth = {
    "January": 31,
    "February": 28,
    "Mars": 31,       
    "April": 30,
    "Mai": 31,        
    "Juni": 30,
    "Juli": 31,       
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31
};

let rMonth = "You must take vitamin D";
let notRMonth = "You do not need to take vitamin D";

if(monthName.includes("r")) {
  printOut("Month is " + monthName + " , "+  rMonth);
} else {
  printOut ("Month is " + monthName + " , "+ notRMonth);
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut( "In " + monthName + " and there are " + daysInMonth[monthName] +  " days" );

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let openMonth = "The gallery is open in";
let closedMonth = "The gallery is closed in"; 
let closedApr = "The gallery is closed, but we have temporary premises in the building next door in"; 


if(monthName.includes("Mai")|| monthName.includes("Mars")){
  printOut(closedMonth);
} else if(monthName.includes("April")) {
  printOut(closedApr);
} else {
  printOut(openMonth);
}

printOut( monthName  );
printOut(newLine);

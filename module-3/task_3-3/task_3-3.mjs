"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function nowDate(){
    const date = new Date(); 
    return date.toLocaleString("no-NB");
}
printOut("The time and date now is " + nowDate());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function nowDate2(){
    const date = new Date(); 
    const formatted = date.toLocaleString("no-NB");
    return { date, formatted }; 
}

function timeLeft(){
    const releaseDate = new Date(); 
    releaseDate.setFullYear(2025);
    releaseDate.setMonth(4);
    releaseDate.setDate(15);

    const options= { year: "numeric", month: "long", day: "numeric" };
    const formatted = releaseDate.toLocaleString("no-NB", options); 
    return {releaseDate, formatted, options  } ; 
}

const { date: startDate, formatted: todayText } = nowDate2();
const { releaseDate: endDate, formatted: daysText, options } = timeLeft(); 

const diffInMs = endDate - startDate;
const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));


printOut("The time and date today is: " + todayText )
printOut( "The epic release of 2XKO is " + daysText )
printOut( "which is " + days + " days away!")
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let randomRadius = Math.floor(Math.random()* 150)+1; 

function calculateCircle(){
    const diameter = randomRadius * 2; 
    const circumference = 2 * Math.PI * randomRadius;
    const area =  Math.PI * randomRadius * randomRadius;

    return { diameter, circumference, area }; 

}

const circle = calculateCircle(randomRadius);

printOut("Circle radius is " + randomRadius + ", diameter = " +
     circle.diameter + ", circumreference = " + circle.circumference.toFixed(2) + ", area =  " + circle.area.toFixed(2));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let randomWidth= Math.floor(Math.random()* 60)+1; 
let randomHeight= Math.floor(Math.random()* 60)+1; 

function calculateRectangle(){
    const perimeter= (randomHeight + randomWidth) * 2; 
    const area= randomWidth * randomHeight; 

    return {perimeter, area }; 
}

const rectangle = calculateRectangle(randomWidth, randomHeight);  

printOut("The width of a rectangle is " + randomWidth + " , the height is " + randomHeight + 
    " , perimeter is " + rectangle.perimeter + ", area is " + rectangle.area 
);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
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

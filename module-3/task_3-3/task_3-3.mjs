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


function fConversion(temp, type) {
  if (temp === undefined) {
    temp = Math.floor(Math.random() * 101);
    printOut("Todays temperature: " + temp + " " + type);
  }

  let celsius, fahrenheit, kelvin;

  if (type === "C") {
  celsius = Math.floor(temp);
  fahrenheit = Math.floor((temp * 9 / 5) + 32);
  kelvin = Math.floor(temp + 273.15);
  } else if (type === "F") {
    fahrenheit = Math.floor(temp);
    celsius = Math.floor((temp - 32) * 5 / 9);
    kelvin = Math.floor(celsius + 273.15);
  } else if (type === "K") {
    kelvin = Math.floor(temp);
    celsius = Math.floor(temp - 273.15);
    fahrenheit = Math.floor((celsius * 9 / 5) + 32);
  } else {
    console.log("Type must be C, F, or K");
    return;
  }

 return { celsius, fahrenheit, kelvin };
}

const todayTemps = fConversion(undefined, "C");

  printOut("Celsius: " + todayTemps.celsius + "°C");
  printOut("Fahrenheit: " + todayTemps.fahrenheit + "°F");
  printOut("Kelvin: " + todayTemps.kelvin + "K");

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*
1. Create a function that calculates the price without VAT (sales tax). 
  1a. The function needs two arguments, one for the price including VAT (gross amount) 
  1b. and one for the tax group in text (normal = 25%, food = 15%, hotel, transport, and cinema = 10%). 
  The text argument should not be case-sensitive. 
2. If the VAT group is not correct, the text "Unknown VAT group!" should be printed.
3. The function must return the price without tax, i.e., the net price.
4. Call the function four times with different gross amounts. 
  One for each of the VAT groups (25, 15, and 10) and one with an unknown group for example “goblins”. 
  Tip: Use "NaN" to identify that an unknown VAT group is returned from the function. 
5. Formula: net = (100 * gross) / (vat + 100)*/ 

function priceNoVat(gross, taxgroup) {
    if (typeof gross !== "number" || isNaN(gross)) return NaN;

    const tg = String(taxgroup || "").toLowerCase().trim();
    let vatRate;

    if (tg === "normal" || tg === "standard") {
        vatRate = 25;
    } else if (tg === "food") {
        vatRate = 15;
    } else if (tg === "hotel" || tg === "transport" || tg === "cinema") {
        vatRate = 10;
    } else {
        printOut("Unknown VAT group!");
        return NaN;
    }

    // net = (100 * gross) / (vat + 100)
    const net = (100 * gross) / (vatRate + 100);
    return net;
}

// Call function four times (three known groups + one unknown)
const gross1 = 1000;
const gross2 = 250;
const gross3 = 499.99;
const gross4 = 123.45; // unknown group example

const net1 = priceNoVat(gross1, "normal");
const net2 = priceNoVat(gross2, "food");
const net3 = priceNoVat(gross3, "Cinema"); // case-insensitive
const net4 = priceNoVat(gross4, "goblins"); // unknown -> NaN

printOut("Gross " + gross1 + " (normal 25%) -> net = " + (isNaN(net1) ? "NaN" : net1.toFixed(2)));
printOut("Gross " + gross2 + " (food 15%) -> net = " + (isNaN(net2) ? "NaN" : net2.toFixed(2)));
printOut("Gross " + gross3 + " (cinema 10%) -> net = " + (isNaN(net3) ? "NaN" : net3.toFixed(2)));
printOut("Gross " + gross4 + " (goblins) -> net = " + (isNaN(net4) ? "NaN" : net4.toFixed(2)));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Create a function that takes 3 arguments and returns the following calculation:
● Speed = Distance / Time
If speed is missing, calculate speed. 
If time is missing, calculate time. 
If distance is missing, calculate the distance. 
If more than one parameter is missing, return NaN */


function calculate3(speed, distance, time){


  
if ( speed === undefined) {
  speed = distance / time; 
} else if ( time === undefined) {
  time = distance / speed ;
} else if ( distance === undefined) {
  distance = speed * time; 
} else if ( speed === undefined && time === undefined && distance === undefined) {
  return NaN; 
}
return {speed, distance, time} ; 
}

// Declaring the variables first 
let speed = 75;
let distance; 
let time = 4 ;

// Calling function after (! viktig rekkefølge)
const result3 = calculate3(speed, distance, time); 

printOut(
  "Speed: " + result3.speed + " km/h" +"</br> " +
  "Distance: " + result3.distance + " km" + " </br> " +
  "Time: "+ result3.time + " h");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Create a function that takes four parameters and returns a result.
   Parameter one: A text string. 
   Parameter two: Value for the maximum size of the text string. 
   Parameter three: Text character. 
   Parameter four:Consecutive insertion of characters (boolean value). 
   Take the text parameter; if it's smaller than the maximum, 
   make it larger with the specified character, either before or after, using the given boolean value.
Have the function return the new string and print it out*/

function parameters4(aString, aValue, aTextCharacter, aBooleanValue){

  // Step 1: Check if the string is already long enough
    if (aString.length >= aValue) {
        printOut(aString);
        return aString;
    }

     // Step 2: Calculate how many characters we need to add
    let charactersToAdd = aValue - aString.length;
    let padding = ""; 

    // Step 3: Build the padding string
    for (let i = 0; i < charactersToAdd; i++) {
        padding = padding + aTextCharacter; // add character one by one
    }

     // Step 4: Add padding before or after the string based on the boolean
    let newString = "";
    if (aBooleanValue === true) {
        newString = padding + aString; // add padding at the start
    } else {
        newString = aString + padding; // add padding at the end
    }

    // Step 5: Print and return the new string
    printOut(newString);
    return newString;

}

parameters4("This is a text", 50, "&nbsp; ", false ); 
parameters4("This is a text", 50, "&nbsp; ", true ); 

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
function testMathExpression(lines = 200) {
  let current = 1;

  for (let line = 1; line <= lines; line++) {
    const leftCount = line + 1;
    const rightCount = line;

    let leftSum = 0;
    let rightSum = 0;

    // Sum left side
    const leftNumbers = [];
    for (let i = 0; i < leftCount; i++) {
      leftSum += current;
      leftNumbers.push(current);
      current++;
    }

    // Sum right side
    const rightNumbers = [];
    for (let i = 0; i < rightCount; i++) {
      rightSum += current;
      rightNumbers.push(current);
      current++;
    }

    // Check equality
    if (leftSum !== rightSum) {
      printOut(`Mismatch at line ${line}`);
      cprintOut(
        `${leftNumbers.join(" + ")} = ${leftSum}`
      );
      printOut(
        `${rightNumbers.join(" + ")} = ${rightSum}`
      );
      return;
    }
  }

  printOut("Maths fun!");
}

// Run the test
testMathExpression(200);


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
function factorial(n) {
  // Base case
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive case
  return n * factorial(n - 1);
}

// Example usage
const number = 5;
const result = factorial(number);

printOut(`Factorial of ${number} = ${result}`);
printOut(newLine);

"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let x = 2 + 3 * 2 - 4 * 6 
let x2 = 2 + 3 * (2 - 4) * 6  

printOut("Original expression"+"<br>"+"2 + 3 * 2 - 4 * 6 =" + x );
printOut(newLine);
printOut("Modified expression"+"<br>"+"2 + 3 * 2 - 4 * 6 =" + x2 );
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function toInch(mm) { 
    return mm / 25.4;
}
let value2 = toInch(25000 + 340);

printOut("25 metres and 34 centimetres in inches is =" +"&nbsp;"+ value2.toFixed(2));
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function dayToMin(day) {
    return day * 1440; 
}
let dayMin = dayToMin(3); 

function hoursToMin(hours) {
    return hours * 60;
}
let hourMin = hoursToMin(12);

let xmin = 14; 

function secToMin (sec) {
    return sec / 60; 
}
let secMin = secToMin(45); 

let totalMin =  dayMin + hourMin + xmin + secMin 
printOut("3 days, 12 hours, 14 minutes, and 45 seconds is" +"&nbsp;"+ totalMin +"&nbsp;"+ "minutes"
);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
let totSec = 6223.52*60; 

let totDays = Math.floor(totSec / (24*3600)); 
totSec %=(24*3600);

let totHours = Math.floor(totSec/ 3600);

totSec %=3600; 

let totMin = Math.floor (totSec / 60);
let secd = Math.floor (totSec % 60); 

printOut("6,322.52 minutes is "+ totDays + " days" +"&nbsp;"+ totHours + " hours"+"&nbsp;"+ totMin + " minutes" +"&nbsp;"+ secd +" seconds");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let enNok = 76 / 8.6; 

function nokToUsd(nok) {
    return Math.round (nok / enNok);
}
let Unok = nokToUsd(477); 

function usdToNok(usd) {
    return Math.round (usd * enNok);
}
let Uusd = usdToNok(54);


printOut(" 54 USD = " + Uusd + "  NOK");
printOut(" 477 NOK = " + Unok + " USD");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let tekst6="There is much between heaven and earth that we do not understand"



printOut("There is much between heaven and earth that we do not understand.");
printOut("The text is " + tekst6.length + " characters long");
printOut("The character at position 19 is: " + tekst6[19]);
printOut("The substring from 35 and 8 places is: " + tekst6.substring(35, 35 + 8));
printOut("The word 'earth' starts at position: " + tekst6.indexOf("earth"));
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let a7= 5>3; 
let b7= 7>=7; 
let tallc= "a">"b"; 
let talld= "1"<"a"; 
let talle= "2500"<"abcd"; 
let tallf= "arne" != "thomas"; 
let tallg= 2===5; 
let tallm= "abcd" > "bcd"; 


printOut("5 > 3 is " + a7);
printOut("7>=7 " + b7);
printOut("a>b " + tallc);
printOut("1<a " + talld);
printOut("2500<abcd " + talle);
printOut("arne != thomas " + tallf);
printOut("2=5" + tallg);
printOut("abcd>bcd= " + tallm);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let str1 = "254";
let num1 = Number(str1); 

let str2 = "57.23";
let num2 = Number(str2);

let str3 = "25 kroner";
let num3 = parseInt(str3);
printOut(num1);
printOut(num2);
printOut(num3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r= Math.floor(Math.random() * 360) + 1;

printOut("The random number is= " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let totalDays= 131; 
let totalWeeks = Math.floor(totalDays / 7); 
totalDays %= totalWeeks; 


printOut("131 days is " + totalWeeks + " weeks " + totalDays + " days");
printOut(newLine);
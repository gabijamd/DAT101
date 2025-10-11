"use strict"
import {printOut} from "../../common/script/utils.mjs";

//3.1 FORELESNING 19.09 

/*const textFalse = "Detter er usant";
const textTrue= " Dette er sant"; 

const ageMovie =  16; 
let age = 14; 

if(age > ageMovie ) {
    printOut(textTrue); 
}
else{
    printOut(textFalse); 
} */


/*const text1 = "Gratulerer du er akkurat gammel nok!";
const text2= " Du kan gå på kino"; 
const text3 = "Beklager, du er ikke gammel nok:("

const ageMovie =  16; 
let age = 14; 

if(age == ageMovie ) {
    printOut(text1); 
}
else if ( age > ageMovie) {
    printOut(text2); 
}
else  {
    printOut(text3)
}*/


/*const text1 = " Du er gammelt til å ta med en som er ikke gammel nok";
const text2= " Du kan gå på kino"; 
const text3 = " Beklager, du er ikke gammel nok:("

const ageMovie =  16; 
const ageBringAlong =18; 
let age1 = 14; // Gammel nok til å ha med seg en person under 16.
let age2 = 19; // Personen er ikke gammelt notk til å gå alene. 

if(age1 < age2){
    const age1Old = age1; 
    age1 = age2; 
    age2 = age1Old; 
}

if(age1 >= ageMovie) {
    printOut("Person 1 " + text2); 
    if(age2 >= ageMovie) {
        printOut(text2);
    }else if (age1 >= ageBringAlong) { 
        printOut ("Person 1" + text1); 
        printOut ("Person 2" + text2); 
    }else {
        printOut("Person 2" + text3); 
    }
} else {
    printOut("Vi har ingen case for dette!"); 
}*/ 


// 3.2 FORELESNING 26.09
// Random, 0.0 til 0.9

// Alle tall mellom 100 og 105

//Den lange versjonen som forklarer mer 
/*
for( let i = 0; i < 20; i++ ) {
let rnd = Math.random ();
printOut("random: " + rnd);

rnd = rnd * 6; 
printOut( "random: " + rnd); 

rnd = Math.floor(rnd) + 100; 
printOut("random: " + rnd); 
printOut("---------------------------"); 
}
*/
/*
//Den korteversjonen - riktige å bruke 
let rnd = Math.floor(Math.random()*6) + 100; 
printOut("random kortere versjon: " + rnd ); */

// 3.3 FORELESNING 10.10 


/*
function addText(aNewText){
    let text = aNewText; 
    text += "<br />"; 
    return text; 
}

let gratings= addText("Hei på deg");

printOut(gratings); */

let aNumber3 = 0;
aNumber3= 3; 

function sum( aNumber1, aNumber2, aNumber3 = 0 + aNumber3 = 0, aNumber4 = 0) {
    let calc= aNumber1 + aNumber2 + aNumber3 + aNumber4; 
    return calc; 
}

//Lambda syntax 
let result= sum(1,2); 
printOut(result); 

result = (aValue1, aValue2) => { return aValue1 + aValue2}; 

result(1,2); 


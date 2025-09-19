"use strict"
import {printOut} from "../../common/script/utils.mjs";

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


const text1 = " Du er gammelt til å ta med en som er ikke gammel nok";
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
}


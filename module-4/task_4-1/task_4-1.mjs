"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const AccountType = { Normal:"", Saving: "", Credit:"", Pension:""};
const accTable = []; 

function addAccountInformation(aNormal, aSaving, aCredit, aPension){
    const newAccount = Object.create(AccountType); 
    newAccount.Normal = aNormal;
    newAccount.Saving = aSaving; 
    newAccount.Credit = aCredit; 
    newAccount.Pension = aPension; 
    accTable.push(newAccount); 
}

addAccountInformation("Brukskonto", "Sparekonto", "Kreditkonto", "Pensionskonto"); 

let accText = "Account type: "; 
for(let i = 0; i < accTable.length; i++){
    const accountType = accTable[i];
    accText += accountType.Normal + ", " + accountType.Saving + ", " + accountType.Credit + ", " + accountType.Pension;
}
printOut(accText); 

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

class Taccount {
    constructor(type)
    this.type = type; 
}

let accountType2  = Taccount.toString(); 


printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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

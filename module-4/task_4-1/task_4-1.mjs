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
/* Basic bank account

Create a bank account class with this structure:
Private type
Public toString()
Public setType(aType)

1) Let the constructor of the class have a parameter for the account type of this bank account class.
    And set "type" to this parameter value. 
2) The "toString" method should return the account type. 
3) The "setType" method should set "type" to this new value and print out the change of account type.

4) Create a constant instance of this "TAccount" class and name it "myAccount" with a "Normal" account
type. Then change the account type to "Saving".


*/ 

class TAccount {
    #type; // definerer privat class element
    constructor(type) {
        this.#type = undefined; // setter undefined sånn at man kan gi den verdi senere
        this.setType(type); // oppdaterer #type and logs new value ('roper' etter setType(type) som oppdater #type sin verdi og printer ut ny My Account verdi)
    }

    // returnerer account type
    // returns the private value so other code can see it inside the class (only read the value in public way)
    toString() {
        return this.#type;
    }

    setType(aType) {
        const old = this.#type;
        this.#type = aType;
        printOut(`MyAccount = ${this.#type}`); // printer ut hvergang man gir elementet en verdi
        // printer ut bare etter elementet har fått den første verdien byttet 
        // først sammenligner gamle verdier, og deretter utfører kode om verdier er false (!==)
        if (old !== undefined && old !== null) {
            printOut(`Account type changed from ${old} to ${this.#type}`);
        }
    }
}

// Tabell / array for å gi verdier til class elementer
const myAccounts = [];
const acc = new TAccount("Normal");
myAccounts.push(acc); // lagrer acc inni array
acc.setType("Saving"); // erstatter første objekt med ny account type
// hvis man skriver myAccounts.push(acc); kommer bare gi en til referanse til samme objekt, og ikke en ny objekt. Så det er unødvendig.


/* Legger til ny account / objekt og pusher det - kortere kode : myAccounts.push(new TAccount("Saving")); 
Den kode som er skiller de objektene fra hverandre. 

Lengre kode med liten forskjell, at man kan bruke acc senere i kode
acc new TAccount("Saving");
myAccounts.push(acc);  */

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* 
Expand the account class to this structure:

Private type
Private balance

Public toString()
Public setType(aType)
Public deposit(aAmount)
Public withdraw(aAmount)

1)"getBalance" should return the account balance. 
2) "deposit" should increase the balance by a given amount
and print the amount and the new balance. 
3)"withdraw" should decrease the balance by a given amount
and print the amount and the new balance. 
*/


class TAccount2 {
    #type;
    #balance;

    constructor(type, balance) {
        this.#type = undefined;
        this.setType(type);
        this.#balance = Number(balance) || 0; // converts the input to a number and falls back to 0 if the input is missing 
    }

    toString() {
        return this.#type;
    }

    setType(aType) {
        const old = this.#type;
        this.#type = aType;
        if (old !== undefined && old !== null) {
            printOut(`Account type changed from ${old} to ${this.#type}`);
        } else {
            printOut(`MyAccount = ${this.#type}`);
        }
    }

    getBalance() {
        return this.#balance;
    }

    deposit(aAmount) {
        this.#balance += aAmount;
        printOut(`Deposit of ${aAmount}, new balance is ${this.#balance}`);
    }

    withdraw(aAmount) {
        this.#balance -= aAmount;
        printOut(`Withdrawal of ${aAmount}, new balance is ${this.#balance}`);
    }
}


const myAccounts2 = [];
const acc2 = new TAccount2("Normal", 140);
myAccounts2.push(acc2);
acc2.deposit(107);
acc2.withdraw(55);

printOut(`My account balance is ${acc2.getBalance()}`)

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Use a "switch statement" to check if the account type is "Pension" or "Saving". If the account type is a
savings account, you cannot make more than three withdrawals. The withdrawal counter should be reset if
the account type is changed or the deposit method is used. If the account type is a pension account, no
withdrawals are allowed.
Make sure that the account is set to "Saving" and that the balance is exactly 100, use "deposit" and
"setType" if necessary.*/

const AccountTypes = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kredittkonto",
  Pensjon: "Pensjonskonto",
};

class TAccount3 {
    #type;
    #balance;
    #withdrawCount

    constructor(type, balance, withdrawCount) {
        this.#type = undefined;
        this.setType(type);
        this.#balance = Number(balance) || 0; 
        this.#withdrawCount = 0;  
    }

    toString() {
        return this.#type;
    }

    setType(aType) {
        this.#withdrawCount = 0;
        const old = this.#type;
        this.#type = aType;
        if (old !== undefined && old !== null) {
            printOut(`Account type changed from ${old} to ${this.#type}`);
        } else {
            printOut(`MyAccount = ${this.#type}`);
        }
    }

    getBalance() {
        return this.#balance;
    }

    deposit(aAmount) {
        this.#withdrawCount = 0;
        this.#balance += aAmount;
        printOut(`Deposit of ${aAmount}, new balance is ${this.#balance}`);
    }

    withdraw(aAmount) {
        this.#balance -= aAmount;
        printOut(`Withdrawal of ${aAmount}, new balance is ${this.#balance}`);
    }

    getWithDraw() {
        return this.#withdrawCount; 
    }

    checkAccType( this.#type ) {
        case AccountTypes.Pension:
        text = "No withdrawals are allowed."; 
        break;
        
        case AccountTypes.Saving:
        this.#withdrawCount++;  
          if(this.#withdrawCount > 3){
          printOut("You can not withdraw from " + this.#type + " more than three times");
        break;

        case 'deposit':
        this.#withdrawCount = ""; 
        break;
    }



}}



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

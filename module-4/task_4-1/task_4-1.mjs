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
/* 
1) Use a "switch statement" to check if the account type is "Pension" or "Saving".
     If the account type is a savings account, you cannot make more than three withdrawals. The withdrawal counter should be reset if the account type is changed or the deposit method is used.
    If the account type is a pension account, no withdrawals are allowed.
2) Make sure that the account is set to "Saving" and that the balance is exactly 100, use "deposit" and "setType" if necessary.*/

const AccountTypes = {
  Normal: "Normal",
  Saving: "Saving",
  Credit: "Credit",
  Pension: "Pension",
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

    // Return of private elements 

    toString() { return this.#type; }
    getBalance() { return this.#balance;}
    getWithDraw() { return this.#withdrawCount; }


    setType(aType) {
        this.#withdrawCount = 0;  // resets counter when type changes
        const old = this.#type;
        this.#type = aType;
        if (old !== undefined && old !== null) {
            printOut(`Account type changed from ${old} to ${this.#type}`);
        } else {
            printOut(`My account = ${this.#type}`);
        }
    }

    deposit(aAmount) {
        this.#withdrawCount = 0;  // resets counter when type changes
        this.#balance += aAmount;
        printOut(`Deposit of ${aAmount}, new balance is ${this.#balance}`);
    }

    withdraw(aAmount) {
        //Switch statement to check if the account type is "Pension" or "Saving". 
        switch ( this.#type ) {
        case AccountTypes.Pension:
             if(this.#withdrawCount === 0){
            printOut("No withdrawals are allowed from "  + this.#type + " account!" ); 
            return; } 
            break;
        
        case AccountTypes.Saving:
        this.#withdrawCount++;  
          if(this.#withdrawCount > 3){
          printOut("You can not withdraw from " + this.#type + " account more than three times!");
            return; } 
        break; } 

         this.#balance -= aAmount;
        printOut(`Withdrawal of ${aAmount}, new balance is ${this.#balance}`);
    }

     

}

const myAccounts3 = [];
const acc3 = new TAccount3("Saving", 75);
myAccounts3.push(acc3);
acc3.deposit(25);
acc3.withdraw(30);
acc3.withdraw(30);
acc3.withdraw(30);
acc3.withdraw(30);
acc3.setType("Pension");
acc3.withdraw(30);
acc3.setType("Saving");
acc3.withdraw(10);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* 
1) Add a private currency type to the account class and set the default value to "NOK".
2) Create a "public" "setCurrencyType" method so you can change the account currency. 
    If this method tries to switch to a new currency of the same type as the account already has, the method should do nothing and just return.

*/

// Currency types 
const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

class TAccount4 {
    #type;
    #balance;
    #withdrawCount;
    #currencyType;  

    constructor(type, balance) {
        this.#type = undefined;
        this.setType(type);
        this.#balance = Number(balance) || 0; 
        this.#withdrawCount = 0; 
        this.#currencyType =  CurrencyTypes.NOK; 

    }

    // Private method for converting currencies
     #currencyConvert(aType){
        return CurrencyTypes.NOK.value / this.#currencyType.value * aType.value; }

    // Return of private elements 

    toString() { return this.#type; }
    getBalance() { return this.#balance.toFixed(2);}
    getWithDraw() { return this.#withdrawCount; }
    getCurrencyType() {return this.#currencyType; }

    setType(aType) {
        this.#withdrawCount = 0;  // resets counter when type changes
        const old = this.#type;
        this.#type = aType;
        if (old !== undefined && old !== null) {
            printOut(`Account type changed from ${old} to ${this.#type}`);
        } else {
            printOut(`My account = ${this.#type}`);
        }
    }

    deposit(aAmount, aType = CurrencyTypes.NOK ) {
        this.#withdrawCount = 0;  // resets counter when type changes
        this.#balance += aAmount;
        printOut(`Deposit of ${aAmount}, new balance is ${this.#balance}`);

        
    }

    withdraw(aAmount, aType) {
        //Switch statement to check if the account type is "Pension" or "Saving". 
        switch ( this.#type ) {
        case AccountTypes.Pension:
             if(this.#withdrawCount === 0){
            printOut("No withdrawals are allowed from "  + this.#type + " account!" ); 
            return; } 
            break;
        
        case AccountTypes.Saving:
        this.#withdrawCount++;  
          if(this.#withdrawCount > 3){
          printOut("You can not withdraw from " + this.#type + " account more than three times!");
            return; } 
        break; } 

         this.#balance -= aAmount;
        printOut(`Withdrawal of ${aAmount}, new balance is ${this.#balance.toFixed(2)} ${this.#currencyType.denomination}`); }

     setCurrencyType(aType) {
    if (this.#currencyType === aType) {return;}
        // Print change
        printOut("The currency has changed from " + this.#currencyType.name + " to " + aType.name);

        // Convert balance
        this.#balance = this.#currencyConvert(aType);

        // Update currency type
        this.#currencyType = aType;

        // Print new balance
        printOut("New balance is " + this.#balance.toFixed(2) + " " + this.#currencyType.denomination);
    }

 } 

const myAccounts4 = [];
const acc4 = new TAccount4("Saving", 0);
acc4.deposit(150);
myAccounts4.push(acc4);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Expand the account class with a private method that converts from one currency to another. Use this
method to change the balance when the currency changes. Replace all places where you print the balance
so that it has exactly 2 decimals.*/

acc4.setType("Normal", 150);
acc4.deposit(50);
acc4.setCurrencyType(CurrencyTypes.EUR); 

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* 

1) Modify the "deposit" and "withdraw" methods to take an additional parameter for the currency type. If no
currency type is specified (undefined), use NOK as the default. Make this change so that the functions
print out the currency the amount is in.

2)Deposit 12 USD and withdraw 10 GBP. Change the account currency a few times and withdraw the rest of
the balance with a different currency than the account is in. You should have a balance of exactly 0.00.

*/


class TAccount5 {
    #type;
    #balance;
    #withdrawCount;
    #currencyType;  

    constructor(type, balance) {
        this.#type = undefined;
        this.setType(type);
        this.#balance = Number(balance) || 0; 
        this.#withdrawCount = 0; 
        this.#currencyType =  CurrencyTypes.NOK; 

    }

    // Private method for converting currencies
     #currencyConvert(aType){
        return CurrencyTypes.NOK.value / this.#currencyType.value * aType.value; }

    // Return of private elements 

    toString() { return this.#type; }
    getBalance() { return this.#balance.toFixed(2);}
    getWithDraw() { return this.#withdrawCount; }
    getCurrencyType() {return this.#currencyType; }

    setType(aType) {
        this.#withdrawCount = 0;  // resets counter when type changes
        const old = this.#type;
        this.#type = aType;
        if (old !== undefined && old !== null) {
            printOut(`Account type changed from ${old} to ${this.#type}`);
        } else {
            printOut(`My account = ${this.#type}`);
        }
    }

    deposit(aAmount, aCurrencyType = CurrencyTypes.NOK ) {
        this.#withdrawCount = 0;
    const exchange = this.#currencyConvert(aCurrencyType);
    const newAmount = aAmount / exchange;
    this.#balance += newAmount;
    const den = this.#currencyType.denomination;
    const name = aCurrencyType.name;
    printOut("Deposit of " + aAmount + " " + name + ", new balance is " + this.#balance.toFixed(2) + den);
        
    }

    withdraw(aAmount, aCurrencyType = CurrencyTypes.NOK) {
        //Switch statement to check if the account type is "Pension" or "Saving".
         switch (this.#type) {
      case AccountTypes.Pensjon:
        printOut("You can not withdraw from " + this.#type);
        return;
      case AccountTypes.Saving:
        this.#withdrawCount++;
        if(this.#withdrawCount > 3){
          printOut("You can not withdraw from " + this.#type + " more than three times");
          return;
        }
        break;
    }
    const exchange = this.#currencyConvert(aCurrencyType);
    const newAmount = aAmount / exchange;
    this.#balance -= newAmount;
    const den = this.#currencyType.denomination;
    const name = aCurrencyType.name;
    printOut("Withdraw of " + aAmount + " " + name + ", new balance is " + this.#balance.toFixed(2) + den);
    }

     setCurrencyType(aType) {
    if(this.#currencyType === aType){
      return;
    }
    printOut("The currency has changed from " + this.#currencyType.name + " to " + aType.name);
    const exchange = this.#currencyConvert(aType);
    this.#currencyType = aType;
    this.#balance *= exchange;
    printOut("New balance is " + this.#balance.toFixed(2) + this.#currencyType.denomination);
    }

 } 

 const myAccounts5 = [];
const acc5 = new TAccount5("Normal", 100);
acc5.deposit(12, CurrencyTypes.USD);
acc5.withdraw(10, CurrencyTypes.GBP);
acc5.setCurrencyType(CurrencyTypes.CAD);
acc5.withdraw(150.1585, CurrencyTypes.SEK); 
acc5.deposit(545, CurrencyTypes.NOK); 
printOut(newLine);

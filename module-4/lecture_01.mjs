"use strict"
import {printOut, newLine} from "../../common/script/utils.mjs";


// 17.10 forelesning objekt + tabell  

/* 
//Tabell
const Names = ["Alice", "Bob", "Charlie", "Diana", "Ethan"]; */

// Syntax til en objekt 

/*
const Person = {fName: "Arne-Thomas", lName:"Aas"}; 
const Person2 = {fName: "Truls", lName:"Aas"}; 

printOut(Person); 
printOut(Person2); 
Person2.lname="Nilsen"; 
printOut(Person2); */

//Bedre skrevet objekt syntax 

/*const Person = { fname: "", lName: ""}; // objekt, alltid bruker store bokstav på variable navn 

const person1 = Object.create(Person); // Kobler til objekt blueprint med unik informasjon 
person1.fname = "Arne-Thomas"; 
person1.lname = "Aas"; 

const person2 = Object.create(Person); 
person2.fname = "Truls"; 
person2.lname = "Jensen"; 


printOut(person1); 
printOut(person2); */

// Objekt + tabell + med fuksjon til å legge til flere nye personer

const Person = { fName: "", lName: ""};  // tom definisjon for å fylle inn info senere
const persons = []; //tom tabell 

// Blueprint function for å legge til forskjellige navn til tabellen 
function addNewPerson(aFName, aLName){
    const newPerson = Object.create(Person); 
    newPerson.fName = aFName; 
    newPerson.lName = aLName; 
    persons.push(newPerson); // pusher ny informasjon til tabellen
}

// Uendelig måte å legge til flere personer 
addNewPerson("Arne-Thomas", "Aas" ); 
addNewPerson("Truls", "Jensen");
addNewPerson("Nina", "Hansen"); 
/*printOut(persons); */

// Hente ut inforamsjon fra tabellen 
printOut(persons[2].lName); // Henter ut person nr 3 sin etternavn 

// Custom text som ''printer ut'' alle personer 
let text = "Personer:<br /> ";
for(let i = 0; i < persons.length; i++){
    const person = persons[i]; 
    text += person.fName + " " + person.lName + "<br />"; 
} 
printOut(text); 
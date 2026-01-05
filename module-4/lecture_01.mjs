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
addNewPerson("Jon", "Aas" ); 
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


// 28.11 Repetisjon 

//Funksjoner - å gjøre
//bruker funksjoner når man skal kjøre en kode mange ganger 

// paratemiresire funksjonen ved å legge inn argumenter / genereliserer den
// den funskjoner har 5 variabler - argumenter telles som variabler også, 2 parameter aLenght, aHeight
// return betyr avslutt funskjon, man trenger ikke skrive den, om man har ikke en verdi å returnere
// Break bruker 'for' og 'while' løkke
function calcArea(aLength, aHeight){
    const length = aLength;
    const height = aHeight;
    const calc = length * height;  
    return calc; //gir verdi til funksjon
}

//Callback , button -> når man bruker en annen funskjon til å bygge ny funskjon 
// den funksjon bruker enn annen funskjon, 
//aEvent = e (samme betydning)
function ButtonCalcClick(aEvent){
let area1 = calcArea(10, 5); // kaller til funksjon utafor (avsender), roper på funksjon
let area2 = calcArea(12, 7);
let totalarea = area1 + area2; 
printOut(`Total area: ${totalarea}`); 
}

//Overfor ble det bare dannet funksjoner, men nedefor utfører den funskjoner der den skal ''lytte'' etter når en bruker trikker på knappen
// funskjoner bare utføres da. 
const cmbCalc = document.getElementById("cmbCalc");
cmbCalc.addEventListener( "click", ButtonCalcClick); 


//Eksamens oppgave (30% av den) *viktig oppgave
// Klasser og objekter

// Class til sortere CDer

// T = tegning til et objekt, ikke selveste objektet 
//A.P.I.E - viktig å lære hva betyr til eksamen 
// konkret abstraksjon (det man gjør med class)
class TCDAlbum{
    #artist; 
    #tittle; 
    #year; 
    #genre; // private variable, felles verdier/atributine 
    constructor(aArtist, aTitle, aYear, aGenre){
        this.#artist = aArtist;
        this.#tittle = aTitle; // this -> konkret adressering til denne objektet, setter unike verdier
        this.#year = aYear; 
        this.#genre = aGenre;
        this.rating = 0; // -> public variable, uten #. 
        
    }

    // bygge funskjon uten å skrive function, når man legger inn funskjoner her er de ikke avhenging eller tilknyttet til globale scope, 
    // det er lokal funksjon som kan bygges bare inni klassen. Man bygger funskjon uten skrive function på starten og den fungerer helt likt. 
    printOut(){ //<- den lokale printOut
        printOut(`artist : ${this.#artist}, <br/> title: ${this.#tittle}, <br/> year: ${this.#year}, <br/> genre: ${this.#genre} <br/>`); // den globale printOut, man skal ikke bruke this, ved å droppe den kaller man på den globale funksjonen printOut.
    }
}
//Tabell

const cds= []; 
let newCD = new TCDAlbum ("Pink FLoyd", "The dark side of the moon", 1973, "rock")
    newCD.rating = 5;
    newCD.printOut(); 
    cds.push(newCD); 

    newCD = new TCDAlbum ("FLoyd", "The  moon", 1988, "punk")
    newCD.rating = 2;
    newCD.printOut(); // må printe ut på denne måten pga man har mange private informasjon, hvis man bare skrev printOut(cds) ville det bare kommet opp public info 
    cds.push(newCD); 

    cds[1].title = "Let it be"; 
    cds[1].printOut(); //Endre en nøyaktig album titel -> men det går ikke ann pga den er private. 












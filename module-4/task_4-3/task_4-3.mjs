"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Create code in cmbTask1CalculateClick to calculate the perimeter and area of the given rectangle*/


function cmbTask1CalculateClick() {
  const txtTask1Output = document.getElementById("txtTask1Output");
  const txtRectHeight = document.getElementById("txtRectHeight");
  const txtRectWidth = document.getElementById("txtRectWidth");

  //'Reads' the input values and converts them from strings to integers/whole number values
  const width = parseInt(txtRectWidth.value); 
  const height = parseInt(txtRectHeight.value);

  //Calculations 
  const area = width * height;
  const perimeter = 2 * (width + height);

  txtTask1Output.innerHTML = `Circumference = ${perimeter}, Area = ${area}`;
}

//Wires the “Calculate” button (cmbTask1Calculate) so that clicking it runs cmbTask1CalculateClick. 
let cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.onclick = cmbTask1CalculateClick;

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Create an event function that is triggered if you press a key while txtTask2Word has keyboard focus.
Every time the user presses "return" or "enter", add the word to the task2Words array and print how
many words and all the words in txtTask2Output. Clear the input field every time the user presses
"enter" or "return".
○ Tip: txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress)*/


function task2Trigger() {
  const txtTask2Word = document.getElementById(txtTask2Word); 
  const txtTask2Output = document.getElementById(txtTask2Output); 
  
  const txtTask2WordCount = Object.keys(txtTask2Word); // lager array av input av ordene 
  txtTask2Output.innerHTML = ` Number of words = ${txtTask2WordCount[key]} `; 

}

let task2Trigger = document.getElementById(txtTask2Word); 
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress); 


//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

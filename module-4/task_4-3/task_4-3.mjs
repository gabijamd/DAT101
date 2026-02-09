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

// Array to store the words entered by the user
let task2Words = [];

// Event handler function for keypress on txtTask2Word
function txtTask2WordKeyPress(event) {
  const txtTask2Word = document.getElementById("txtTask2Word");
  const txtTask2Output = document.getElementById("txtTask2Output");
  
  // Check if the key pressed is "Enter" or "Return"
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent default form submission
    
    const word = txtTask2Word.value.trim(); // Get the word and remove whitespace
    
    // Only add non-empty words
    if (word !== "") {
      task2Words.push(word); // Add word to array
    }
    
    // Update the output display
    txtTask2Output.innerHTML = `Number of words = ${task2Words.length}<br>${task2Words.join(", ")}`;
    
    // Clear the input field
    txtTask2Word.value = "";
  }
}

// Wire the event listener to the input field
let txtTask2WordInput = document.getElementById("txtTask2Word");
txtTask2WordInput.addEventListener("keypress", txtTask2WordKeyPress); 


//--- Part 3 ----------------------------------------------------------------------------------------------
/* Create a click event function to check which of the checkboxes are selected. And print the result in
txtTask3Output.*/

function cmbTask3CheckAnswerClick() {
  //Importing ID from HTML
  const txtTask3Output = document.getElementById("txtTask3Output");
  //Finds all checkboxes with name="chkTask3" that are currently ticked. querySelectorAll returns a list, and Array.from turns it into an array so you can loop or map over the selected boxes.
  const checked = Array.from(
    document.querySelectorAll('input[name="chkTask3"]:checked')
  );

  //If nothings is selected
  if (checked.length === 0) {
    txtTask3Output.innerHTML = "No boxes selected.";
    return;
  }

  //Using array to loop trough selected values and stores (pushes) checked ones in the array.
  let selectedValues = [];
  for (let i = 0; i < checked.length; i++) {
    selectedValues.push(checked[i].value);
  }
  txtTask3Output.innerHTML = `Selected: ${selectedValues.join(", ")}`;
}

let cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.onclick = cmbTask3CheckAnswerClick;




//--- Part 4 ----------------------------------------------------------------------------------------------
/*Use a for-loop to add "radio" buttons to the divTask4Cars element. Get the values from the CarTypes
array. Print the selected car in txtTask4Output*/

const divTask4Cars = document.getElementById("divTask4Cars"); 
const txtTask4Output = document.getElementById("txtTask4Output");

for (let i = 0; i < CarTypes.length; i++) {
  const car = CarTypes[i];

  //Radio button 
  const radioButton = document.createElement("input");
  radioButton.type = "radio"; // 'radio' renders as radio button in HTML 
  radioButton.name = "Cars";
  radioButton.id = `car_${i}`;
  radioButton.value = car.value;

  //Radio button text ('label')
  const radioLabel = document.createElement("label");
  radioLabel.htmlFor = radioButton.id; //makes the text clickable
  radioLabel.textContent = car.caption; //uses that car object captions as text beside radio buttons 

  //Each loop adds one radio button + label + a new line into the div
  // appendChild -> creates HTML elements in JS, and inserts the in to the page. 
  divTask4Cars.appendChild(radioButton); // Radio button element
  divTask4Cars.appendChild(radioLabel); // Label element, which in HTML stores radio buttons
  divTask4Cars.appendChild(document.createElement("br")); // br>'break'>same as newLine
}

// Prints out selected car 
function divTask4CarsChange(event) {
  // Only react if a car radio button was clicked
  if (event.target.name !== "Cars") {
    return;
  }

  // The value we get is a string, so convert it to a number
  const chosenValue = parseInt(event.target.value);

  // Find the matching car object
  let chosenName = "";
  for (let i = 0; i < CarTypes.length; i++) {
    if (CarTypes[i].value === chosenValue) {
      chosenName = CarTypes[i].caption;
      break;
    }
  }

  // Show the result
  txtTask4Output.innerHTML = "Selected car: " + chosenName;
}

divTask4Cars.addEventListener("change", divTask4CarsChange);


//--- Part 5 ----------------------------------------------------------------------------------------------
/* Create an event function that occurs when the element selectTask5Animals changes value (change),
and print the user's selection in the txtTask5Output element*/

const selectTask5Animals = document.getElementById("selectTask5Animals"); 
const txtTask5Output = document.getElementById("txtTask5Output");

function selectAnimal(event){
  const chosenAnimal = event.target.options[event.target.selectedIndex].text;
  txtTask5Output.innerHTML = "Selected animal: " + chosenAnimal; 
}

selectTask5Animals.addEventListener("change", selectAnimal);
selectTask5Animals.addEventListener("input", selectAnimal);
selectAnimal({ target: selectTask5Animals });

//--- Part 6 ----------------------------------------------------------------------------------------------
/*Take all the names from the GirlsNames array and add them to the selectTask6Girls element.
Create an event function in the same way as in task 5 and print the name the user selects in
txtTask6Output*/

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Use the data from filmtittel (movie title), filmsjanger (movie genre), filmregissør (movie
director), and filmrate (movie rating) and fill in the HTML table every time the user clicks the
"cmbAddMovie" button. Fill in the data from the MovieGenre array in selectMovieGenre.*/

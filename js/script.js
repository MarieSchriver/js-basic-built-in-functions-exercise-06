'use strict';

function generateRandomNumber() {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    // Log the random number to the console for debugging
    console.log(randomNumber);
  
    // Update the <p> element with id="random-number" to display the number
    document.getElementById("random-number").textContent = `Random Number: ${randomNumber}`;
  
    // Show the random number in an alert box
    alert(`Random Number: ${randomNumber}`);
  }

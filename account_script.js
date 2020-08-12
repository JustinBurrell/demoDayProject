//get references
// let hourscompleted = document.getElementById("completed_textbox");

// let userInput = hours.value;



//progress bar
const progressBarFull = document.getElementById('progressBarFull');

let questionCounter = 37;
 
const MAX_QUESTIONS = 100;

 progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;


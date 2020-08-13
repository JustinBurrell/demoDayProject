//progress bar
const progressBarFull = document.getElementById('progressBarFull');

let questionCounter = 37;
 
const MAX_QUESTIONS = 100;

 progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;


// import functions and grab DOM elements
const numberInput = document.getElementById('number-input');
const buttonInput = document.getElementById('guess');
const answerResult = document.getElementById('answer-text');
const guessNumberCounter = document.getElementById('guess-counter');
const rightCounter = document.getElementById('rightguess');
const wrongCounter = document.getElementById('wrongguess');
const tryAgainButton = document.getElementById('tryagainbutton');

// console.log(guessNumberCounter);
// initialize global state
let guessCount = 4;
// set event listeners 
  //if guess === answer "You are correct"
  //if guesscount === 4 "you are out of guesses"
  //if guess < answer "You are under"
  //if guess > answer "you are over"
let answer = Math.floor(Math.random() * 21);
// console.log(answer);
let wrongguess = 0;
let rightguess = 0;


buttonInput.addEventListener('click', () => {
    
    if (guessCount >= 1) guessCount--;
    let num = Number(numberInput.value);
    let answerOutput;
    if (num === answer) {  
        answerOutput = 'correct!';
        rightguess++;
    } else if (guessCount <= 0) {
        answerOutput = 'out of guesses!';
    } else if (num > answer) {
        answerOutput = 'Over!';
        wrongguess++;
    } else if (num < answer) {
        answerOutput = 'Under!';
        wrongguess++;
        console.log(answer);   
    }
    const resultText = `You are ${answerOutput}.`;
    answerResult.textContent = resultText;
    guessNumberCounter.textContent = guessCount;
    rightCounter.textContent = rightguess;
    wrongCounter.textContent = wrongguess;
    
});

tryAgainButton.addEventListener('click', () => {
    answer = Math.floor(Math.random() * 21);
    // location.reload(answer);
    guessCount = 4;
    guessNumberCounter.textContent = guessCount;
});


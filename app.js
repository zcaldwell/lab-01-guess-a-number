// import functions and grab DOM elements
const numberInput = document.getElementById('number-input');
const buttonInput = document.getElementById('guess')
const answerResult = document.getElementById('answer-text')

// initialize global state
let guessNumber = 0;
// set event listeners 
  //if guess === answer "You are correct"
  //if guesscount === 4 "you are out of guesses"
  //if guess < answer "You are under"
  //if guess > answer "you are over"
let answer = Math.floor(Math.random() * 21);
console.log(answer);

buttonInput.addEventListener('click', () => {
    guessNumber++;
    let num = Number(numberInput.value)
    let answerOutput;
    if(num === answer){
      answerOutput = 'correct!';
    } else if (guessNumber >= 4) {
      answerOutput = 'out of guesses!';
    } else if (num > answer) {
      answerOutput = 'Over!';
    } else if (num < answer) {
      answerOutput = 'Under!';
    }
    const resultText = `You are ${answerOutput}.`;
    answerResult.textContent = resultText;
});

    
    


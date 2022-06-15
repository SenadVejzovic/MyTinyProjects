const startBtn = document.getElementById('start');
let container = document.querySelector('.container');
const h3 = document.getElementById('span');
const buttons = container.querySelector('.buttons');
const backdrop = document.querySelector('.backdrop');
const toolTip = document.querySelector('.tooltip');

const ROCK = 'Rock';
const PAPER = 'Paper';
const SCISSORS = 'Scissors';

let gameIsRunning = false;

function draw(playerChoice, computerChoice) {
  backdrop.style = `visibility: visible;`;
  backdrop.addEventListener('click', () => {
    backdrop.style = `visibility: hidden;`;
    toolTip.style = `visibility: hidden`;
    restart();
  });

  toolTip.style = `visibility: visible;
  background-color: blue;
  color: white;`;
  toolTip.innerHTML = `<h3>DRAW!</h3>
  <p>You choosed ${playerChoice} and the computer choosed also ${computerChoice}</p>
  `;
  toolTip.addEventListener('click', () => {
    backdrop.style = `visibility: hidden;`;
    toolTip.style = `visibility: hidden`;
    restart();
  });
}


function win(playerChoice, computerChoice) {
  backdrop.style = `visibility: visible;`;
  backdrop.addEventListener('click', () => {
    backdrop.style = `visibility: hidden;`;
    toolTip.style = `visibility: hidden`;
    restart();
  });

  toolTip.style = `visibility: visible;
  background-color: green;
  color: white;`;
  toolTip.innerHTML = `<h3>WIN!</h3>
  <p>You choosed ${playerChoice} and the computer choosed ${computerChoice}</p>
  `;
  toolTip.addEventListener('click', () => {
    backdrop.style = `visibility: hidden;`;
    toolTip.style = `visibility: hidden`;
    restart();
  });
}


function lose(playerChoice, computerChoice) {
  backdrop.style = `visibility: visible;`;
  backdrop.addEventListener('click', () => {
    backdrop.style = `visibility: hidden;`;
    toolTip.style = `visibility: hidden`;
    restart();
  });

  toolTip.style = `visibility: visible;
  background-color: red;
  color: white;`;
  toolTip.innerHTML = `<h3>LOSE!</h3>
  <p>You choosed ${playerChoice} and the computer choosed ${computerChoice}</p>
  `;
  toolTip.addEventListener('click', () => {
    backdrop.style = `visibility: hidden;`;
    toolTip.style = `visibility: hidden`;
    restart();
  });
}

function restart() {
  h3.textContent = 'Press the button to start the game!';
  startBtn.style = `visibility: visible;`;
  buttons.style = 'visibility: hidden';
}

const computerGeneratedChoice = () => {
  let computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    return ROCK;
  } else if (computerChoice === 2) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};


  const rockBtn = buttons.querySelector('.rock-btn');
  rockBtn.addEventListener('click', () => {
    playerChoice = ROCK;
    const computerChoice = computerGeneratedChoice();
    getWinner(playerChoice, computerChoice);
  })
  const paperBtn = buttons.querySelector('.paper-btn');
  paperBtn.addEventListener('click', () => {
    playerChoice = PAPER;
    const computerChoice = computerGeneratedChoice();
    getWinner(playerChoice, computerChoice);
  })

  const scissorsBtn = buttons.querySelector('.scissors-btn');
  scissorsBtn.addEventListener('click', () => {
    playerChoice = SCISSORS;
    const computerChoice = computerGeneratedChoice();
    getWinner(playerChoice, computerChoice);
  })


//to finish this logic
function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return draw(playerChoice, computerChoice);
  } else if (playerChoice === PAPER && computerChoice === ROCK || playerChoice === ROCK && computerChoice === SCISSORS || playerChoice === SCISSORS && computerChoice === PAPER) {
    return win(playerChoice, computerChoice);
  } else {
    return lose(playerChoice, computerChoice);
  }
}

startBtn.addEventListener(
  'click',
  (() => {

    if (gameIsRunning){
      return;
  } else {
      gameIsRunning = true;
      
  }
  gameIsRunning = false;

  h3.textContent = 'Choose your option wisely!';

    startBtn.style = `visibility: hidden;`;

    buttons.style = 'visibility: visible';
  })
);
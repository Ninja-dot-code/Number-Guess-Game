const ramdom = (Math.random() * 100 + 1).toFixed();
const button = document.querySelector(".subtn");
let userinput = document.querySelector(".guessfield");
const Guesses = document.querySelector(".guesses");
const remaining = document.querySelector(".lastresult");
const loworhi = document.querySelector(".loworHi");
const startover = document.querySelector(".parse-result");
const p = document.createElement("p");
let preguess = [];
let numGuess = 1;
let Gameplay = true;

if (Gameplay) {
  button.addEventListener("click", (e) => {
    e.preventDefault;
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateguess(guess);
  });

}



function validateguess(guess) {

  if (isNaN(guess) || guess > 100 || guess <= 0) {
    alert("enter a valid number");

  } 
  
  else {

    if (numGuess === 10 || numGuess <= 0) {

      displayguess(guess);
      displaymessage(`Game over...: Random number was: ${ramdom}`);
      Endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess == ramdom) {
    displaymessage(`Great!You Guess Right Number: ${ramdom}`);
    Endgame();
  }
   else if (guess > ramdom) {
    displaymessage(`Number is Too Height: `);
  } 
  else if (guess < ramdom) {
    displaymessage(`Number is Too Low`);
  }
}

function displayguess(guess) {
  userinput.value = " ";
  Guesses.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displaymessage(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function Endgame() {
  userinput.value = " ";
  userinput.setAttribute("disabled", "");
  button.setAttribute("disabled", "");
  p.classList.add("newbutton");
  p.innerHTML = `<h3 id ='newGame'>Start new Game</h3>`;
  play;
  p.style.fontSize = "12px";
  startover.appendChild(p);
  Gameplay = false;
  newgame();
}

function newgame() {
  const newGamebutton = document.querySelector(".newbutton");
  newGamebutton.addEventListener("click", function () {
    userinput.removeAttribute("disabled");
    button.removeAttribute("disabled");
    ramdom = (Math.random() * 100 + 1).toFixed();
    preguess = [];
    Guesses = "";
    remaining.innerHTML = `${11 - numGuess}`;
    startover.removeChild("p");

    Gameplay = true;
  });
}

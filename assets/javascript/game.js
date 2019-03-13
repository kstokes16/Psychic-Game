// letters that user can guess

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// define variables needed for game

var randomLetter = ""
var winTotal = 0;
var lossTotal = 0;
var lettersGuessed = [];
var beginningGuesses = 10;
var newGame;

window.addEventListener("keypress", onKeyPress, false);

// starts the new game

function generateRandomLetter() {
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

function resetGuesses() {
  guessesLeft = beginningGuesses;
  displayOnScreen("guesses-left", `Losses: ${String(guessesLeft)}`);
  displayOnScreen("guesses-so-far", `Your Guesses so far: `);
}

function displayOnScreen(divContainer, content) {
  document.getElementById(divContainer).innerHTML = content;
}

newGame ();
function newGame () {
  lettersGuessed = [];
  resetGuesses();
  generateRandomLetter();
  displayOnScreen("wins", `Wins: ${String(winTotal)}`);
  displayOnScreen("losses", `Losses: ${String(lossTotal)}`);
  displayOnScreen("guesses-left", `Guesses Left: ${String(guessesLeft)}`);
}

function onKeyPress(key) {
  letter = key.key.toLowerCase();

  if (alphabet.includes(letter, 0) && lettersGuessed.includes(letter, 0) === false)
  {
    lettersGuessed.push(letter);
    printKeyPressed(letter);
    guessesLeft--;
    displayOnScreen("guesses-left", `Guesses Left: ${String(guessesLeft)}`);

    if (String(letter) == String(randomLetter)) {
      winTotal++;
      displayOnScreen("wins", `Wins: ${String(winTotal)}`);
      newGame();

    }
    if (guessesLeft === 0) {
      lossTotal++;
      displayOnScreen("losses", `Losses: ${String(lossTotal)}`);
      newGame();
    }

  }

}

function printKeyPressed(letter) {
  if (guessesLeft == 10) {
    document.getElementById("guesses-so-far").innerHTML + letter;
  } else {
    document.getElementById("guesses-so-far").innerHTML + ", " + letter;
  }
}




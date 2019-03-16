// letters to choose from

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// variables I need

var randomLetter = ""
var winTotal = 0;
var lossTotal = 0;
var lettersGuessed = [];
var beginningGuesses = 10;
var newGame;

window.addEventListener("keypress", onKeyPress, false);

function generateRandomLetter() {
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
}

// to reset guesses

function resetGuesses() {
  guessesLeft = beginningGuesses;
  displayOnScreen("guesses-left", `Losses: ${String(guessesLeft)}`);
  displayOnScreen("guesses-so-far", `Your Guesses so far: `);
}

// to display the inner HTML content

function displayOnScreen(divContainer, content) {
  document.getElementById(divContainer).innerHTML = content;
}

// function for new game

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
  if (guessesLeft == 9) {
    document.getElementById("guesses-so-far").innerHTML += letter;
  } else
  
  {
    document.getElementById("guesses-so-far").innerHTML += "" + ", " + letter;
  }
}

newGame ();


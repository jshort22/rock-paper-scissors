

let char = "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"

let bulb = "https://sg.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png"

let sqr = "https://assets.pokemon.com/assets/cms2/img/pokedex/full//007.png"

let questionMark = "https://archives.bulbagarden.net/media/upload/thumb/8/84/WTP_EP001_before.png/400px-WTP_EP001_before.png"

let pokeball = "https://i.pinimg.com/736x/3c/0d/e3/3c0de384b20a985809b9f9ade61e89fe.jpg"

let options = [char, bulb, sqr]

let selectedOption = null


const gameRules = document.getElementById("game-rules")
const startButton = document.getElementById("start-button")
const instructionMessage = document.getElementById("instruction-message")
const scoreContainer = document.getElementById("score-container")
const optionsContainer = document.getElementById("options-container")
const gameContainer = document.getElementById("game-container")
const resetButton = document.getElementById("reset-button")
const battleButton = document.getElementById("start-battle")

const playerScoreDisplay = document.getElementById("player-score")
const computerScoreDisplay = document.getElementById("computer-score")
const finalWinner = document.getElementById("final-winner")

const playerSelection = document.getElementById("player-selection")
const computerSelection = document.getElementById("computer-selection")

const playerPlaceholderBox = document.getElementById("player-placeholder-box")
const computerPlaceholderBox = document.getElementById("computer-placeholder-box")
const vsPlaceholderBox = document.getElementById("vs-container")

const selectionImage = document.getElementById("player-selection")
const computerImage = document.getElementById("computer-selection")

const winnerResult = document.getElementById("winner-result")

const rockButton = document.getElementById("rock-icon")
const paperButton = document.getElementById("paper-icon")
const scissorsButton = document.getElementById("scissors-icon")


playerScore = 0
computerScore = 0


function handleStart() {
  startButton.style.display = "none"
  gameContainer.style.display = "flex"
  gameRules.style.display = "none"
}

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * options.length);
  return options[randomChoice];
}

function hasPlayerWon(player, computer) {
  if (player == char && computer == bulb) {
    return true
  } 
  if (player == bulb && computer == sqr) {
    return true
  }  
  if (player == sqr && computer == char) {
    return true
  }
  else {
    return false
  }
}

function getRoundResults(playerChoice) {
  let computerChoice = getComputerChoice()
  computerSelection.src = computerChoice
  
  if (computerChoice == playerChoice) {
    winnerResult.innerText =  "It's a tie!";
    playerPlaceholderBox.style.backgroundColor = "white"
    computerPlaceholderBox.style.backgroundColor = "white"
    instructionMessage.style.display = "flex";
    battleButton.style.display = "none";
    return;
  }
  
  if (hasPlayerWon(playerChoice, computerChoice) == true) {
    playerScore ++
    playerScoreDisplay.innerText = playerScore
    winnerResult.innerText = "Ash Wins!"
    playerPlaceholderBox.style.backgroundColor = "lightgreen"
    
  }
  
  else {
    computerScore ++
    computerScoreDisplay.innerText = computerScore
    winnerResult.innerText = "Rival Wins!"
    computerPlaceholderBox.style.backgroundColor = "lightgreen"
  }
  
  instructionMessage.style.display = "flex";
  battleButton.style.display = "none";
}

function checkGameOver() {
  if (playerScore == 3 || computerScore == 3) {
    
    count = 3 
    const timer = setInterval(() => {
      count--;
      
      if (count > 0) {  
      } 
      else {
        clearInterval(timer);
  
    
    winnerResult.innerText = "Player reached 3. Player wins!";
    optionsContainer.style.display = "none";
    winnerResult.innerText = "";
    resetButton.style.display = "block";
    instructionMessage.style.display = "none";
    battleButton.style.display = "none";
    playerPlaceholderBox.style.display = "none";
    computerPlaceholderBox.style.display = "none";
    vsPlaceholderBox.style.display = "none";
    finalWinner.style.display = "block";    
        
    const winnerText = playerScore === 3
          ? "Ash wins!"
          : "Rival wins";
        finalWinner.innerText = winnerText;
      }
     }, 1000);
    };
  }

function handleResetButton() {
  playerScore = 0;
  playerScoreDisplay.innerText = playerScore
  computerScore = 0;
  computerScoreDisplay.innerText = computerScore;
  optionsContainer.style.display = "flex";
  resetButton.style.display = "none";
  instructionMessage.style.display = "flex";
  computerImage.src = questionMark;
  selectionImage.src = pokeball;
  winnerResult.innerText = "";
  playerPlaceholderBox.style.display = "flex";
  computerPlaceholderBox.style.display = "flex";
  vsPlaceholderBox.style.display = "block";
  finalWinner.style.display = "none";
  ;}


startButton.addEventListener("click", function() {
  handleStart(event); 
});

rockButton.addEventListener("click", function() {
  selectedOption = char;
  getComputerChoice(event);
  selectionImage.style.display = "flex";
  playerSelection.src = char;
  computerSelection.src = questionMark;
  instructionMessage.style.display = "none";
  battleButton.style.display = "block";
  playerPlaceholderBox.style.backgroundColor = "white";
  computerPlaceholderBox.style.backgroundColor = "white";
  winnerResult.innerText = "";
  playerPlaceholderBox.style.transform = "rotateY(180deg)"
});

paperButton.addEventListener("click", function() {
  selectedOption = bulb;
  getComputerChoice(event);
  selectionImage.style.display = "flex";
  playerSelection.src = bulb;
  computerSelection.src = questionMark;
  instructionMessage.style.display = "none";
  battleButton.style.display = "block";
  playerPlaceholderBox.style.backgroundColor = "white";
  computerPlaceholderBox.style.backgroundColor = "white";
  winnerResult.innerText = "";
  playerPlaceholderBox.style.transform = "rotateY(180deg)"
});

scissorsButton.addEventListener("click", function() {
  selectedOption = sqr;
  getComputerChoice(event);
  selectionImage.style.display = "flex";
  playerSelection.src = sqr;
  computerSelection.src = questionMark;
  instructionMessage.style.display = "none";
  battleButton.style.display = "block";
  playerPlaceholderBox.style.backgroundColor = "white";
  computerPlaceholderBox.style.backgroundColor = "white";
  winnerResult.innerText = "";
  playerPlaceholderBox.style.transform = "rotateY(180deg)"
});

battleButton.addEventListener("click", function() {
  count = 3 
  vsPlaceholderBox.innerText = count
  battleButton.disabled = true
  
  const timer = setInterval(() => {
    count--;
    if( count == 1) {
      computerPlaceholderBox.classList.add("card-flip")
    }
    if (count > 0) {
      vsPlaceholderBox.innerText = count
    } else {
      clearInterval(timer);
      vsPlaceholderBox.innerText = "VS";
      getRoundResults(selectedOption);
      computerPlaceholderBox.classList.remove("card-flip")
      computerImage.style.display = "flex"
      battleButton.disabled = false;
      checkGameOver();
      return;
    }
   },1000);
  });

resetButton.addEventListener("click", function() {
  handleResetButton(event);
});


// instructions
// ability to change player & rival names


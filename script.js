let humanScore
let computerScore

playGame()


function getComputerChoice() {
    let choice = '';
    let randomNum = Math.random() * 3;
    randomNum = Math.floor(randomNum);
    switch(randomNum) {
        case 0:
            choice = 'rock';
            break;
        case 1:
            choice = 'paper';
            break;
        case 2:
            choice = 'scissors';
            break;
        default:
            choice = 'not worky';
    }
    return choice;
}

function getHumanChoice () {
    let choice = ''
    while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        choice = prompt("rock, paper, or scissors??", "test");
        choice = choice.toLowerCase()
    }
    
    return choice
}

function playRound(humanChoice, computerChoice) {
    console.log('human picks ' + humanChoice)
    console.log('computer picks ' + computerChoice)
    if (humanChoice === computerChoice) {
        console.log("Tie... " + humanChoice + " is the same as " + computerChoice)
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log("You win! " + humanChoice + " beats " + computerChoice)
        humanScore++
    }
    else if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'rock')) {
        console.log("Computer wins! " + computerChoice + " beats " + humanChoice)
        computerScore++
    }
    else {
        console.log("somethin wrong")
    }
}

function playGame() {
    humanScore = 0
    computerScore = 0
    
    while (humanScore + computerScore < 5) {
        playRound(getHumanChoice(), getComputerChoice())
    }
    if (humanScore > computerScore) {
        console.log("Human wins " + humanScore + " to " + computerScore)
    }
    else {
        console.log("Computer wins " + computerScore + " to " + humanScore)
    }

}
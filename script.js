let humanScore = 0
let computerScore = 0

const btns = document.querySelectorAll("button")
btns.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id, getComputerChoice());
    })
})
let page = document.querySelector("body")
let results = document.createElement("div")
// playGame()


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

// function getHumanChoice () {
//     let choice = ''
//     while (choice != 'rock' && choice != 'paper' && choice != 'scissors') {
//         choice = prompt("rock, paper, or scissors??", "test");
//         choice = choice.toLowerCase()
//     }
    
//     return choice
// }

function playRound(humanChoice, computerChoice) {
    let humanPick = document.querySelector("#human")
    humanPick.textContent = `Human picks: ${humanChoice}`

    let computerPick = document.querySelector("#computer")
    computerPick.textContent = `Computer picks: ${computerChoice}`

    let res = document.querySelector("#result")
    let scoreHuman = document.querySelector("#humanScore")
    let scoreComputer = document.querySelector("#computerScore")
    if (humanChoice === computerChoice) {
        res.textContent = `Result: Tie... ${humanChoice} is the same as ${computerChoice}`
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log("You win! " + humanChoice + " beats " + computerChoice)
        res.textContent = `You win! ${humanChoice} beats ${computerChoice}`
        humanScore++
        scoreHuman.textContent = `Human score: ${humanScore}`
        if (humanScore >= 5) {
            endGame("human")
        }
    }
    else if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'rock')) {
        console.log("Computer wins! " + computerChoice + " beats " + humanChoice)
        computerScore++
        scoreComputer.textContent = `Computer score: ${computerScore}`
        if (computerScore >= 5) {
            endGame("computer")
        }
    }
    else {
        console.log("somethin wrong")
    }
    page.appendChild(results)
}

// function playGame() {
//     humanScore = 0
//     computerScore = 0
    
//     while (humanScore + computerScore < 5) {
//         playRound(getHumanChoice(), getComputerChoice())
//     }
//     if (humanScore > computerScore) {
//         console.log("Human wins " + humanScore + " to " + computerScore)
//     }
//     else {
//         console.log("Computer wins " + computerScore + " to " + humanScore)
//     }

// }

function endGame(winner) {
    let endStatement = document.createElement("p")
    endStatement.textContent = `${winner} wins the game!`
    page.appendChild(endStatement)
}
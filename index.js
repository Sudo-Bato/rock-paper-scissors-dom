// get the ellements


// Variables a initialiser

let computerChoice
let humanChoice 

let computerScore = 0
let humanScore = 0 

let wincondition = false

function restart() {
    humanScore = 0
    computerScore = 0
    wincondition = false
    playGame()
}

// Faire la fonction getComputerChoice
function getComputerChoice() {
    // générer un numéro aléatoire entre 1 et 3
    let random = Math.floor(Math.random() * 3 + 1)

    // convertir ce numéro en rock paper scissors
    if ( random == 1) {
        computerChoice = "rock"
    }

    if ( random == 2 ) {
        computerChoice = "paper"
    }

    if ( random == 3 ) {
        computerChoice = "scissors"
    }

    console.log(computerChoice)

}




// Faire la function getHumanChoice
function getHumanChoice() {

   // prompt la réponse de l'humain
   humanChoice = prompt("rock/paper/scissors")
   if ( humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors" ) {
    alert(`you typed it wrong (you typed ${humanChoice}) please type it correctly`)
    getHumanChoice()
   }

}

// Faire la function playGame 
function playGame() {

    while ( wincondition === false ) {

        
        getComputerChoice()
        getHumanChoice()
        
        // tie
        
        if ( computerChoice === humanChoice ) {
            alert(`The computer used ${computerChoice} and yoou used ${humanChoice}, saddly this is a tie`)
        }
        
        // Human win
        
        if ( computerChoice == "rock" && humanChoice =="paper" ) {
            humanScore++;
            alert(`The computer used ${computerChoice} and yoou used ${humanChoice}, you won. Computer score : ${computerScore} your score : ${humanScore}`)
        }
        
        if ( computerChoice == "paper" && humanChoice =="scissors" ) {
            humanScore++;
            alert(`The computer used ${computerChoice} and yoou used ${humanChoice}, you won. Computer score : ${computerScore} your score : ${humanScore}`)
        }
        
        if ( computerChoice == "scissors" && humanChoice =="rock" ) {
            humanScore++;
            alert(`The computer used ${computerChoice} and yoou used ${humanChoice}, you won. Computer score : ${computerScore} your score : ${humanScore}`)
        }
        
        // Computer win
        
        if ( computerChoice == "rock" && humanChoice =="scissors" ) {
            computerScore++;
            alert(`The computer used ${computerChoice} and yoou used ${humanChoice}, you loose. Computer score : ${computerScore} your score : ${humanScore}`)
        }
        
        if ( computerChoice == "paper" && humanChoice =="rock" ) {
            computerScore++;
            alert(`The computer used ${computerChoice} and yoou used ${humanChoice}, you loose. Computer score : ${computerScore} your score : ${humanScore}`)
        }
        
        if ( computerChoice == "scissors" && humanChoice =="paper" ) {
            computerScore++;
            alert(`The computer used ${computerChoice} and yoou used ${humanChoice}, you loose. Computer score : ${computerScore} your score : ${humanScore}`)
        }

        if ( humanScore == 3 ) {
            alert(`You won the game !`)
            wincondition = true
        }
        
        if ( computerScore == 3 ) {
            alert(`Computer won`)
            wincondition = true
        }

    }

} 

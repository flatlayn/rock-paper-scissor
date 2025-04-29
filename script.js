function getComputerChoice() {
    const num = Math.floor(Math.random() * 3);
    if (num === 0)
        return "rock"
    if (num === 1)
        return "paper"
    if (num === 2)
        return "scissors"
}

function getHumanChoice() {
    return prompt("Input?").toLowerCase();
}

let human = 0;
let comp = 0;

function playRound(hc, cc) {
    if (hc === 'rock' && cc === 'rock')
        console.log('Tie!')
    if (hc === 'rock' && cc === 'paper') {
        console.log('You lose, Paper beats Rock!')
        comp++;
    }
    if (hc === 'rock' && cc === 'scissors'){
        console.log('You win, Rock beats Scissors!')
        human++
    }
    if (hc === 'paper' && cc === 'rock'){
        console.log('You win, Paper beats Rock!')
        human++
    }
    if (hc === 'paper' && cc === 'paper')
        console.log('Tie!')
    if (hc === 'paper' && cc === 'scissors'){
        console.log('You lose, Scissors beats Paper!')
        comp++;
    }
    if (hc === 'scissors' && cc === 'rock'){
        console.log('You lose, Rock beats Scissors!')
        comp++;
    }
    if (hc === 'scissors' && cc === 'paper'){
        console.log('You win, Scissors beats Paper!')
        human++
    }
    if (hc === 'scissors' && cc === 'scissors') {
        console.log('Tie!')
    }
}


function playGame() {
    for (i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let compChoice = getComputerChoice();
        console.log(`Human chooses ${humanChoice}. Computer chooses ${compChoice}`)
        playRound(humanChoice, compChoice);
        console.log(`Human: ${human} Computer: ${comp}`)
        if (human >= 3 || comp >= 3)
            break;
    }
    if (human > comp)
        console.log(`You win! Human: ${human} Computer: ${comp}`)
    else if (human < comp)
        console.log(`You lose! Human: ${human} Computer: ${comp}`)
    else if (human === comp)
        console.log(`Tied at ${human}`)

}
playGame()
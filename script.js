const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const winner_score = document.getElementById('winner-score')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    window.location.reload()
})

const player_choices = [rock, paper, scissors];
let computer_counter = 0;
let player_counter = 0;
let number_of_games = 0;

//Getiing the scores paragrapgh
const player_p = document.getElementById('player');
const computer_p = document.getElementById('computer');

//computer player(chooses a random from rock,paper,scissors)
function computerPlayer() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let randomChoice = choices[randomIndex];
    return randomChoice;
}

//compare (compares computer output with players output and displays the winner)
function winner() {
    //player (takes the value of the clicked value)
    player_choices.forEach((player) => {
        player.addEventListener('click', function () {
            let player = this.getAttribute('data-image');
            let computer = computerPlayer();
            if (number_of_games < 5) {
                game(computer, player)
            }
            else {
                gameWinner()
            }
            number_of_games = ++number_of_games
        });
    });

}

function game(computer, player) {
    if (player === computer) {
    }
    else if ((computer == "rock" && player == "scissors") ||
        (computer == "scissors" && player == "paper") ||
        (computer == "paper" && player == "rock")) {
        computer_counter = ++computer_counter
    }
    else {
        player_counter = ++player_counter
    }
    computer_p.innerHTML = `Computer: ${computer_counter}`
    player_p.innerHTML = `Player: ${player_counter}`
}

function gameWinner() {
    if (computer_counter === player_counter) {
        winner_score.innerHTML = `Its A Tie`
    }
    else if (computer_counter > player_counter) {
        winner_score.innerHTML = `Computer Wins`
    }
    else {
        winner_score.innerHTML = `Player Wins`
    }
}
winner();

computer_p.innerHTML = `Computer ${computer_counter}`;
player_p.innerHTML = `Player ${player_counter}`;
let score = document.getElementById("score");
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");


function randomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}
let firstCard = 0;
let secondCard = 0;

function game() {
    
    firstCard = randomCard();
    secondCard = randomCard();
    let sum = firstCard + secondCard;
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard;
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}
function newCard() { 
    cardEl.textContent = "Your Cards: ";
    sumEl.textContent = "Sum: ";
    messageEl.textContent = "";
}


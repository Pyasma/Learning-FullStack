let hasBlackJack = false;
let isAlive = true;
let message = "";
let cards = [];
let sum = 0;

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

function game() {
    // initialize the game
    isAlive = true;
    hasBlackJack = false;
    cards = [randomCard(), randomCard()];
    sum = cards[0] + cards[1];
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards: " + cards.join(" ");
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
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
    if (isAlive && !hasBlackJack) {
        let card = randomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}

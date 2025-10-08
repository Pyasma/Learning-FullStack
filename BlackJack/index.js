let hasBlackJack = false;
let isAlive = true;
let message = "";
let cards = [];
let sum = 0;

let player = {
    name : prompt("Enter your name:") || "Player",
    chips: 150
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let bodyEl = document.querySelector(".main");

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
    if (player.chips < 10) {
        bodyEl.textContent = "You don't have enough chips to play!";
    }
    player.chips -= 10;
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
        player.chips += 10;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
    playerEl.textContent = player.name + ": $" + player.chips;
}

function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = randomCard();
        cards.push(card);
        sum += card;
        renderGame();
    }
}

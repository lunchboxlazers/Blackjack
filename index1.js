import Deck from "./deck.js";

let CARD_VALUE_MAP = {
    A: 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    K: 10,
    J: 10,
    Q: 10
}

let sum = 0
let message = ""
let isAlive = false
let hasBlackJack = false
let sumEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let cardSlot = document.querySelector(".card-slot")

document.getElementById("startButton").onclick = function() {startGame()}
document.getElementById("drawButton").onclick = function() {newCard()}

let deck = new Deck()
deck.shuffle()

function updateMessage() {
    if (sum <= 20) {
        message = "Would you like to draw another card?"
    } else if (sum === 21) {
        message = "You got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function startGame() {
    isAlive = true
    
    renderGame()
}

function renderGame() {
    let firstCard = deck.pop()
    let secondCard = deck.pop()

    sum = CARD_VALUE_MAP[firstCard.value] + CARD_VALUE_MAP[secondCard.value]
    sumEl.textContent = "Sum: " + sum
    cardSlot.appendChild(firstCard.getHTML())
    cardSlot.appendChild(secondCard.getHTML()) 
    
    updateMessage()
}

function newCard() {
    let newCard = deck.pop()
    if (isAlive === true && hasBlackJack === false) {
    

    sum += CARD_VALUE_MAP[newCard.value] 
    sumEl.textContent = "Sum: " + sum
    cardSlot.appendChild(newCard.getHTML())
    
    updateMessage()
    }
}


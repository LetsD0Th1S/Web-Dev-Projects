let cards = []
let sum = 0
let cashOut = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let player = {
    name: "Julian",
    chips: 145,
}

let playerEl = document.querySelector("#player-el")
playerEl.textContent = player.name + ": " + player.chips + " chips left"

function getRandomCard(){
    let randomNum = Math.floor(Math.random()*11)+1
    if (randomNum > 10){
        return 10
    } else if (randomNum === 1){
        return 11
    }
    else {
        return randomNum
    }
}

function startGame(){
    isAlive = true
    cards = []
    sum = 0
    for (i = 0; i < 2; i++){
        cards.push(getRandomCard())
        sum += cards[i]
    }
    renderGame()
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    for(idx in cards){
        cardsEl.textContent += cards[idx] + " "
    }
    if (sum < 21){
        message = "Do you want to draw a new card? 😀"
        
    }
    else if (sum === 21){
        message = "You\'ve won by getting a Blackjack!🥳" 
        cashOut = true
        
    }
    else {
        message = "You are out of the game! 😞"
        isAlive = false
    }

    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && cashOut === false){
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
    }
}



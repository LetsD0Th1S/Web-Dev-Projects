const letters = [];
let pwOne = ''
let pwTwo = ''
let pwOneEl = document.querySelector("#pw-one")
let pwTwoEl = document.querySelector("#pw-two")

for (i = 33; i < 127; i++){
    const char = String.fromCharCode(i);
    if(char.includes("")){
        letters.push(char);
    }
}

function firstPW(){
    let pwLength = parseInt(document.querySelector("input").value)
    for (i = 0; i < pwLength; i++){
        pwOne += letters[Math.floor(Math.random()*letters.length)]
    }
    return pwOne
}

function secondPW(){
    let pwLength = parseInt(document.querySelector("input").value)
    for (i = 0; i < pwLength; i++){
        pwTwo += letters[Math.floor(Math.random()*letters.length)]
    }
    return pwTwo
}


function createPW(){
    pwOneEl.textContent = firstPW()
    pwTwoEl.textContent = secondPW()
    pwOne = ''
    pwTwo = ''
}

    



let homeCount = 0
let guestCount = 0
let homeScore = document.querySelector("#home-score")
let guestScore = document.querySelector("#guest-score")


homeScore.textContent = homeCount
guestScore.textContent = guestCount

// if (homeCount > guestCount) {
//     document.querySelector(".home").style.border = "2px solid green"
//     homeScore.style.color = 'green'
//     guestScore.style.color = 'red'
// }
// else if (guestCount > homeCount ){
//     document.querySelector(".guest").style.border = "2px solid green"
//     guestScore.style.color = 'green'
//     homeScore.style.color = 'red'
// }

function addOne(){
    document.querySelector(".main-container").addEventListener('click', function(event){
        if (event.target.classList.contains('but1') && event.target.classList.contains('home')){
            homeCount += 1
            homeScore.textContent = homeCount
            console.log(homeCount);
            if (homeCount > guestCount) {
                document.querySelector(".home-box").style.border = "2px solid green"
                document.querySelector(".guest-box").style.border = "none"
                homeScore.style.color = 'green'
                guestScore.style.color = 'red'
            }
            else if (guestCount > homeCount ){
                document.querySelector(".guest-box").style.border = "2px solid green"
                document.querySelector(".home-box").style.border = "none"
                guestScore.style.color = 'green'
                homeScore.style.color = 'red'
            }
        }
        else if (event.target.classList.contains('but1') && event.target.classList.contains('guest')){
            guestCount += 1
            guestScore.textContent = guestCount
            console.log(guestCount);
            if (homeCount > guestCount) {
                document.querySelector(".home-box").style.border = "2px solid green"
                document.querySelector(".guest-box").style.border = "none"
                homeScore.style.color = 'green'
                guestScore.style.color = 'red'
            }
            else if (guestCount > homeCount ){
                document.querySelector(".guest-box").style.border = "2px solid green"
                document.querySelector(".home-box").style.border = "none"
                guestScore.style.color = 'green'
                homeScore.style.color = 'red'
            }
        
        } 
    },{once:true})

}

function addTwo(){
    document.querySelector(".main-container").addEventListener('click', function(event){
        if (event.target.classList.contains('but2') && event.target.classList.contains('home')){
            homeCount += 2
            homeScore.textContent = homeCount
            console.log(homeCount);
            if (homeCount > guestCount) {
                document.querySelector(".home-box").style.border = "2px solid green"
                document.querySelector(".guest-box").style.border = "none"
                homeScore.style.color = 'green'
                guestScore.style.color = 'red'
            }
            else if (guestCount > homeCount ){
                document.querySelector(".guest-box").style.border = "2px solid green"
                document.querySelector(".home-box").style.border = "none"
                guestScore.style.color = 'green'
                homeScore.style.color = 'red'
            }
        }
        else if (event.target.classList.contains('but2') && event.target.classList.contains('guest')){
            guestCount += 2
            guestScore.textContent = guestCount
            console.log(guestCount);
            if (homeCount > guestCount) {
                document.querySelector(".home-box").style.border = "2px solid green"
                document.querySelector(".guest-box").style.border = "none"
                homeScore.style.color = 'green'
                guestScore.style.color = 'red'
            }
            else if (guestCount > homeCount ){
                document.querySelector(".guest-box").style.border = "2px solid green"
                document.querySelector(".home-box").style.border = "none"
                guestScore.style.color = 'green'
                homeScore.style.color = 'red'
            }
        
        } 
    },{once:true})

}
function addThree(){
    document.querySelector(".main-container").addEventListener('click', function(event){
        if (event.target.classList.contains('but3') && event.target.classList.contains('home')){
            homeCount += 3
            homeScore.textContent = homeCount
            console.log(homeCount);
            if (homeCount > guestCount) {
                document.querySelector(".hombox").style.border = "2px solid green"
                document.querySelector(".guest-box").style.border = "none"
                homeScore.style.color = 'green'
                guestScore.style.color = 'red'
            }
            else if (guestCount > homeCount ){
                document.querySelector(".guest-box").style.border = "2px solid green"
                document.querySelector(".home-box").style.border = "none"
                guestScore.style.color = 'green'
                homeScore.style.color = 'red'
            }
        }
        else if (event.target.classList.contains('but3') && event.target.classList.contains('guest')){
            guestCount += 3
            guestScore.textContent = guestCount
            console.log(guestCount);
            if (homeCount > guestCount) {
                document.querySelector(".home-box").style.border = "2px solid green"
                document.querySelector(".guest-box").style.border = "none"
                homeScore.style.color = 'green'
                guestScore.style.color = 'red'
            }
            else if (guestCount > homeCount ){
                document.querySelector(".guest-box").style.border = "2px solid green"
                document.querySelector(".home-box").style.border = "none"
                guestScore.style.color = 'green'
                homeScore.style.color = 'red'
            }
        
        } 
    },{once:true})

}


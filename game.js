var startGameElem = document.querySelector('.startGame')
var scoreElem = document.querySelector('.score')
var sec
var timer
var score = 0
var clicked = false


startGameElem.addEventListener('click', function (e) {
    score++
    console.log(score)
    scoreElem.textContent= 'Score:'+ score

    //start clock
    if(clicked === false){
        gameClock()
        clicked = true
    }

})

function gameClock () {
    sec = 5;
        document.getElementById('timerDisplay').innerHTML='Timer:00:' + sec
    timer = setInterval(function () {
        sec--
        document.getElementById('timerDisplay').innerHTML='Timer:00:' + sec
        if (sec == 0) {
            clearInterval(timer)
            clicked = false
            score = 0
        }
    },1000)
}



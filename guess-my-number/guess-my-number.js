const playAgain = document.getElementById('again');
const checkNum = document.getElementById('checkNum');
const root = document.documentElement;
let userGuess = document.getElementById('userGuess');
let userInput = document.getElementById('userInput');
let hint = document.getElementById('hint');
let score = document.getElementById('score');
let highscore = document.getElementById('highscore');
let isCorrect = false
let initialScore = 20
let randomNum = parseInt(Math.random() * 20) + 1

const compareNum = (userNum, pcNum) => {
    if (userNum.value > pcNum) {
        hint.textContent = "Too high!"
        return true
    } else if (userNum.value < pcNum) {
        hint.textContent = "Too low!"
        return true
    } else {
        hint.textContent = "Correct number!"
        root.style.setProperty("--bg", "#09F")
        return false
    }
}

const puntuationScore = comparationResult => {
    if (comparationResult) {
        initialScore--
        score.textContent = initialScore
        return parseInt(initialScore)
    } else {
        return initialScore
    }
}

checkNum.addEventListener('click', () => {
    userGuess.textContent = userInput.value
    let confirmation = compareNum(userInput, randomNum)
    initialScore = puntuationScore(confirmation)
    if (initialScore == 0) {
        hint.textContent = "You lost the game!"
        checkNum.disabled = true
        return
    }
    if (initialScore > highscore.textContent && !confirmation) highscore.textContent = initialScore
})

playAgain.addEventListener('click', () => {
    root.style.setProperty("--bg", "#333")
    userGuess.textContent = '?'
    score.textContent = 20
    userInput.value = ''
    initialScore = 20
    randomNum = parseInt(Math.random() * 20)
})
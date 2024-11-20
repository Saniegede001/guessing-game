let computerNumber =Math.floor(Math.random() * 10 );
console.log(computerNumber)

const screen = document.getElementById('screen')
screen.textContent = `I am thinking of a number from 0 to 9. Can you guess the number?`

const buttons = Array.from(document.getElementsByClassName('buttons'))
const button = document.getElementsByClassName('button')

const score = document.getElementById('score')
let scoreValue = 0;
score.innerText = `Your Score: ${scoreValue}`

const chances = document.getElementById('chances')
let chancesValue = 4
chances.innerText= `Your Chances: ${chancesValue}`

// const next = getElementById('next')
// next.addEventListener('click',()=> {
//     chancesValue = 4
// })

buttons.map(button => {
    button.addEventListener('click', (e) =>{
        if (e.target.innerText == computerNumber) {
            screen.innerText = `My Number was ${computerNumber} You win \n Click next to continue`
            scoreValue+=10
            score.innerText =`Your Score: ${scoreValue }`
            console.log('Your score' + scoreValue)
        } else if (e.target.innerText != computerNumber && computerNumber < e.target.innerText ) {
            screen.innerText = `Wrong, The Number is less than your guess; Guess again`
            chancesValue = chancesValue - 1
            chances.innerText = `Your Chances: ${chancesValue}`
        } 
          if (e.target.innerText != computerNumber && computerNumber > e.target.innerText) {
            screen.innerText = `Wrong,the Number is higher than your guess; Guess again`
            chancesValue = chancesValue - 1
            chances.innerText = `Your Chances: ${chancesValue}`
        } 
        if (chancesValue==0) {
            alert(`Game over! my numer is ${computerNumber} \n \nYour Total score is: ${scoreValue}\n \nDo you wish to try again?`)
            location.reload()
        } 
        
    })
})

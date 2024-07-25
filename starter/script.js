'use strict';

let secretNumber = Math.trunc(Math.random()*20) + 1;
//.trunc method is used for convert decimal figure into float
let score = 20;
let highscore = 0

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    //first method
    if(!guess){
        document.querySelector('.message').textContent = '⛔️ No Number'
    } else if ( guess === secretNumber ){
        document.querySelector('.message').textContent = '🎉 Correct Number!'
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'

        if( score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
    }else if( guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess >secretNumber ? '📈 Too high!' : '📉 Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '👎🏻 You Lost the game'
        }
    }
//second method
// let message = "";
// let score = 20;
// switch (true) {
//     case !guess:
//         message = '⛔️ No Number';
//         break;
//     case guess === secretNumber:
//         message = '🎉 Correct Number!';
//         break;
//     case guess > secretNumber:
//         console.log(score--, 'hello')
//         message = '📈 Too high!';
//         score--;
//         break;
//     case guess < secretNumber:
//         console.log(score--, 'world')
//         message = '📉 Too Low!';
//         score--;
//         break;
//     default:
//         message = 'Invalid input';
// }
// if (score < 1) {
//     message = '👎🏻 You Lost the game';
// }
// document.querySelector('.message').textContent = message;
// document.querySelector('.score').textContent = score;
 {/*conclusion we use both method but in case of score decrement it failed to decrement because it is stuck in cases
so we prefer to follow first method */}
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20) + 1;
    score = 20;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem'
})
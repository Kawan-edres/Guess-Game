'use strict';


let secretNumber=Math.floor(Math.random()*20)+1;
let score=20;
let highScore=0;

const displayMesage=function(message){
    document.querySelector('.message').textContent=message;

}
document.querySelector('.score').textContent=score;

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);

    if(!guess){
        displayMesage('Please enter a number');
    }
    else if(guess===secretNumber){
        displayMesage('You win!');
        document.querySelector('body').style.backgroundColor='green'
        document.querySelector('.number').textContent=secretNumber;

        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }

       
    }
    else if(guess !==secretNumber){
        displayMesage(guess>secretNumber?'Too high':'Too low')
        if(score>0){
            score--;
            document.querySelector('.score').textContent=score;

        }
        else{
            displayMesage('Game over');
            document.querySelector('body').style.backgroundColor='red'
        }


    }
    

})


document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.floor(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('.message').textContent='start guessing';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';
    document.querySelector('body').style.backgroundColor='#222';
}

)

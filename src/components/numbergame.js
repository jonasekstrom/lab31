import React, { Component } from 'react';

class NumberGame extends Component {

// Game values
    state = {
        min: 1,
        max: 100,
        winningNum: 55,
        guessesLeft: 3,
        guessInput: 0,
        message: '',
        btn: 'Submit'
    }

/*
// Ui elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
game.addEventListener('mousedown', function(event){
    if(event.target.className === 'play-again'){
        window.location.reload();
    }
})
*/
    guessInputHandler = (event) => {

    this.setState({
        guessInput: Number(event.target.value)
    })
}
// Listen guess event
    guessHandler = () => {
    
    const guess = this.state.guessInput;
    
    
    // validate input
    if(isNaN(guess) || guess < this.state.min || guess > this.state.max){
        this.setMessage(`Please enter a number between ${this.state.min} and ${this.state.max}`, 'red')
    }

    // check if won
    if(guess === this.state.winningNum){
        // disable input
        this.gameOver(`${this.state.winningNum} is correct!, YOU WIN`);
    } else {
        // wrong number
        this.setState({
            guessesLeft: this.state.guessesLeft - 1
        })

        if(this.state.guessesLeft === 0){
            this.gameOver(false,`Game over, you lost. The correct number was ${this.state.winningNum}`);

        } else {
            console.log(typeof(this.state.guessInput))
            console.log(this.state.winningNum)
            console.log(this.state.guessInput)
            // game continues - answer wrong
            // change border color
            //guessInput.style.borderColor = 'red';
            // clear input
            this.setState({
                guessInput: null
            })
            // tell user the wrong number
            this.setMessage(`${guess} is not correct, ${this.state.guessesLeft} guesses left`, 'red');
        }
    }
    
};


// Game over

    gameOver = (msg) => {
    let color;
    //won === true ? color = 'green' : color = 'red';
  // disable input
  //this.guessInput.disabled = true;
  // change border color
  //guessInput.style.borderColor = color;
  // set text color
  //message.style.color = color;
  // set message
  this.setMessage(msg);
  // play again
  this.setState({
      btn: 'Play Again'
  })
  //guessBtn.className += 'play-again';
}

// Get winning number
    getRandomNum = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
}

    setMessage = (msg, color) => {
        console.log(msg + color)
    //message.style.color = color;
        this.setState({
            message: msg
        });
}
  render() {
    return (
        <div className="componentcontainer">
            <h1>Number Game</h1>
            <div id="game">
              <p>Guess a number between <span className="min-num">{this.state.min}</span> and <span className="max-num">{this.state.max}</span></p>
            <input type="number" id="guess-input" placeholder="Enter your guess..." onChange={this.guessInputHandler}/>
            <button id="guess-btn" onClick={this.guessHandler}>{this.state.btn}</button>
            <p className="message">{this.state.message}</p>
            </div>
         </div>
    )
}
}

export default NumberGame;
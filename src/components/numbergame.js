import React, { Component } from 'react';

class NumberGame extends Component {

componentDidMount() {
	this.setState({
		winningNum: this.getRandomNum(1, 100)
	});
}
	
// Game values
    state = {
        winningNum: 55,
        guessInput: 0,
		numOfGuesses: 0,
        message: '',
        btn: 'Submit'
    }

    guessInputHandler = (event) => {
		this.setState({
			guessInput: Number(event.target.value)
		})
	}
	
	btnHandler = () => {
		if (this.state.btn === "Play Again") {
			this.setMessage("");
			this.setState({
				winningNum: this.getRandomNum(1, 100),
				btn: "Submit",
				numOfGuesses: 0
			});
		} else {
			this.guessHandler();
		}	
	}
	
	incrementGuesses = () => {
		this.setState({
			numOfGuesses: this.state.numOfGuesses + 1
		});
	}
	
	// Listen guess event
    guessHandler = () => { 
		const guess = this.state.guessInput;
    
    	// check if input is valid
    	if(isNaN(guess) || guess < 1 || guess > 100){
        	this.setMessage("Please enter a number between 1 and 100")
		//check if number is correct
		} else if (guess === this.state.winningNum) {
			// user wins
			this.incrementGuesses();
			this.gameOver(`${this.state.winningNum} is correct!, YOU WON with ${this.state.numOfGuesses} guesses!`);
		//answer is wrong
		} else {
			this.incrementGuesses();
			//if guess is higher
			if (guess > this.state.winningNum) {
				this.setMessage("The right answer is lower than your guess")
			} else {
				this.setMessage("The right answer is higher than your guess")
			}
		}
	};

	// Game over
	gameOver = (msg) => {
		this.setMessage(msg);
		// play again
		this.setState({
		  btn: 'Play Again'
		})
	}

	// Get winning number
    getRandomNum = (min, max) => {
    	return Math.floor(Math.random()*(max-min+1)+min);
	}

    setMessage = (msg) => {
        console.log(msg);
        this.setState({
            message: msg
        });
	}
	render() {
		return (
			<div className="componentcontainer">
				<h1>Number Game</h1>
				<div id="game">
			  		<p>Guess a number between 1 and 100</p>
					<input type="number" 
						id="guess-input" 
						placeholder="Enter your guess..."
						onChange={this.guessInputHandler}/>
					<button 
						id="guess-btn" 
						onClick={this.btnHandler}>{this.state.btn}
					</button>
					<p className="message">{this.state.message}</p>
				</div>
			 </div>
		)
	}
}

export default NumberGame;
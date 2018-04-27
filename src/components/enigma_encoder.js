import React, { Component } from 'react';

class Enigma extends Component {
    state = {
	  	convertedInput: "",
	  	hasError: false
    }
	handleInput = event => {
	  let illegalChar = false;
	  let inputStr = event.target.value;
	  
	  //assign latest added char
	  let inputChar = inputStr.charAt(inputStr.length-1);
	  
	  //make input into lowerCase
	  let lcChar = inputChar.toLowerCase();
	  
	  //make input into charCode
	  let charCode = lcChar.charCodeAt(0);
	  
	  //if letter is = 122 make input into 97
	  if (charCode === 122) {
		charCode = 97;
	  
	  //else if letter is less than 97 or higher than 122, return error
	  } else if (charCode < 97 || charCode > 122) {
		illegalChar = true
		
	  //else add 1
	  } else {
		charCode++;
	  }
	
	  //make charCode into stringChar
	  let newChar = String.fromCharCode(charCode);
	  
	  //add it to convertedInput
	  if (illegalChar) {
	  	this.setState({hasError: true});
	  } else {
		this.setState({hasError: false}, this.addToConvertedInput(newChar));
	  }
	}
	
	resetInput = event => {
	  this.setState({convertedInput: ""});
	}
	
	addToConvertedInput = (str) => {
	  this.setState({convertedInput: this.state.convertedInput + str});
	}
	
    render(){
        return(
            <div className="componentcontainer">
            	<input type="text" onChange={this.handleInput} value={this.state.convertedInput} />
				<button onClick={this.resetInput}>Reset</button><br/>
				{this.state.hasError && 
			  		<p>Only alphabetical characters allowed!</p>
				}
            </div>
        )
    }
}

export default Enigma;
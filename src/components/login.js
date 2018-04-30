import React, { Component } from 'react';
//import { Link  } from 'react-router-dom';

class Login extends Component {
    
    state = {
        name: '',
		loggedIn: false,
        signButton: 'Sign-In'
    }
    
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    changeButton = () => {
        if(this.state.signButton === 'Sign-In') {
            this.setState({
				signButton: 'Sign-Out',
				loggedIn: true
			})
        } else {   
            this.setState({
				signButton: 'Sign-In',
				loggedIn: false,
				name: ''
			})
        }
    }
    render() {
    return (
        <div className="componentcontainer">
            <input type="text" onChange={this.handleChange} value={this.state.name}/><br/>
            <button onClick={this.changeButton}>{this.state.signButton}</button>
			{this.state.loggedIn && <p>Welcome, {this.state.name}!</p>}
        </div>
    )
}   
}

export default Login;
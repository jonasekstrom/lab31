import React, { Component } from 'react';
//import { Link  } from 'react-router-dom';

class Login extends Component {
    
    state = {
        name: '',
        signButton: 'Sign-In'
    }
    
    handleChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    changeButton = () => {
        if(this.state.signButton === 'Sign-In') {
            this.setState({signButton: 'Sign-Out'})
        } else {   
            this.setState({signButton: 'Sign-In'})
        }
    }
    render() {
    return (
        <div className="componentcontainer">
            <input type="text" onChange={this.handleChange}/><br/>
            <button onClick={this.changeButton}>{this.state.signButton}</button>

        </div>
    )
}   
}

export default Login;
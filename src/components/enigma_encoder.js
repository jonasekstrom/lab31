import React, { Component } from 'react';

class Enigma extends Component {
    state = {
        title: 'Hejsan'
    }
    render(){
        return(
            <div className="componentcontainer">
                {this.state.title}
            </div>
        )
    }
}

export default Enigma;
import React, { Component } from 'react';

class ContactForm extends Component {

    state = {
        value: '',
        checked: false,
        disabled: true
    }

    handleInputChange = () => {
        this.setState({
            checked: !this.state.checked
          });
        
        this.setState({
            disabled: this.state.checked
        })
            
    
      }

    
    render(){
        return (
            <div className="componentcontainer">
                <form>
                    <div>
                        <label>Name: </label><br/>
                        <input type="text" />
                        </div>
                        <div>
                        <label>Email: </label><br/>
                        <input type="email" />
                        </div>
                        <br/>
                        <br/>
                        <label>Not a robot?: </label>
                        <input name="robot" type="checkbox" checked={this.state.checked} onChange={this.handleInputChange} />
                        <br/>
                        <br/>
                        <div>
                            <label>Review:</label><br/>
                            <textarea value={this.state.value} disabled={this.state.disabled}/>
                            
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
            </div>
        )
    }
}

export default ContactForm;
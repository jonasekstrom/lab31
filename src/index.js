import React from 'react';
import ReactDOM from  'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import './css/App.css';

// COMPONENTS
import Home from './components/home';
import Login from './components/login';
import ContactForm from './components/contact_form'
import Enigma from './components/enigma_encoder';
import NumberGame from './components/numbergame';

const App = () =>{
    
    return (
        <BrowserRouter>
            <div className="maincontainer">
                <header id="headercontainer">
                    <div>LAB 31 <span>Welcome David</span></div>
                    <NavLink to="/"><button className="button">Home</button></NavLink>
                    <NavLink 
                        to="/login"
                        activeStyle={{color:'red'}}
                        activeClassName="selected"
                    ><button className="button2">Login</button></NavLink>
                    <NavLink to={{
                        pathname:'/contactform'
                    }}><button className="button2">Contact Form</button></NavLink>
                    <NavLink to="/enigma"><button className="button2">Enigma Encoder</button></NavLink>
                    <NavLink to="/numbergame"><button className="button3">Guess The Number</button></NavLink>
                    <hr/>
                </header>
                <Switch>
                    <Route path="/contactform" component={ContactForm}/>
                    <Route path="/numbergame" component={NumberGame}/>
                    <Route path="/enigma" component={Enigma}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)
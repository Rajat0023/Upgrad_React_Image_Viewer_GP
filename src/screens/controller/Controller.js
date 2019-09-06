import React, { Component } from 'react';
import Home from '../home/Home.js';
import Login from '../login/Login.js';
import Profile from '../profile/Profile.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Controller extends Component {
    constructor() {
        super();
        this.baseUrl = "http://localhost:3000";
    }



    //note above method gets called first before render()

    render() {


        return (
            <Router>
                <div className="main-container">
                    <Route exact path='/' render={(props) => <Login {...props} baseUrl={this.baseUrl} />} />
                    <Route path='/home/:id' render={(props) => <Home {...props} baseUrl = {this.baseUrl}/>} />
                    <Route path='/profile/:id' render={(props) => <Profile {...props} baseUrl = {this.baseUrl}/>} />
                </div>

            </Router>
        )

    }
}


export default Controller
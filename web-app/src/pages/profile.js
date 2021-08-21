import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header'



function profile (){
    return(
        <Router>
            <Header />

        </Router>
    )
}

export default profile;
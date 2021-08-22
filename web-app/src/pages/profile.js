import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header'
import Navbar from '../components/navbarElemet'



function profile (){
    return(
        <Router>
               <Navbar />

            <Header />
         
        </Router>
    )
}

export default profile;
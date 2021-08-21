import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbarElemet';
import Header from './pages/header'
import * as firebase from 'firebase'



function App() {
  return (
    
    // using router for the navbar links
    

    <Router>
{/* Using the imported file from the compoenets */}
      <Navbar />
      <Header />
 
      
      


    </Router>
     

  );
}

export default App;


import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbarElemet';
import header from './pages/header'
import * as firebase from 'firebase'
import Login from './pages/Login'



function App() {
  return (
    
    // using router for the navbar links
    

    <Router>
{/* Using the imported file from the compoenets */}
      {/* <Navbar />
      <Header />
       */}

       <Route  exact path="/login" component={Login}/>
      


    </Router>
     

  );
}

export default App;


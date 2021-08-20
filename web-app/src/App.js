import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbarElemet';
import header from './pages/header'
function App() {
  return (
    // using router for the navbar links
    

    <Router>
{/* Using the imported file from the compoenets */}
      <Navbar />

      <header />

    </Router>
     

  );
}

export default App;


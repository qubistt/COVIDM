import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbarElemet';
function App() {
  return (
    // using router for the navbar links
    

    <Router>
{/* Using the imported file from the compoenets */}
      <Navbar />

    </Router>
     

  );
}

export default App;


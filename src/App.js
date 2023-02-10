import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


function App() {
  return (
    <Router>
    <Home/>

    </Router>
  )
}

export default App;

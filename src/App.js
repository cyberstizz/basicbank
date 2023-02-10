import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


function App() {
  return (
    <Router>

      <Routes>
         <Route path="/" element={<Home/>} />
         <Route  path="/accounts" element={<Home/>} />
         <Route />

      </Routes>



    </Router>
  )
}

export default App;

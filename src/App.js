import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Accounts from './components/Accounts';


function App() {
  return (
    <Router>

      <Routes>
         <Route path="/" element={<Home/>} />
         <Route  path="/accounts" element={<Accounts/>} />
         <Route  path="/create" element={<Home/>} />

      </Routes>



    </Router>
  )
}

export default App;

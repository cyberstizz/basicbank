import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Accounts from './components/Accounts';


function App() {
  return (
    <Router>

      <Routes>
         <Route path="/" element={<Home/>} />
         <Route  path="/accounts/:username/:password" element={<Accounts />} />
         <Route  path="/signup" element={<Create />} />
         <Route  path="/create/:username/:password/:account_number/:account_balance/:account_type" element={<Home/>} />

      </Routes>



    </Router>
  )
}

export default App;

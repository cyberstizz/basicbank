import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Accounts from './components/Accounts';
import Create from './components/Create';
import TestRoute from './components/TestRoute';

function App() {
  return (
    <Router>

      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/accounts" element={<Accounts />} />
         <Route path="/create" element={<Create />} />
         <Route path="/signup/:username/:password/:account_number/:account_balance/:account_type" element={<Home/>} />
         <Route path="/testRoute" element={<TestRoute />} />

      </Routes>



    </Router>
  )
}

export default App;

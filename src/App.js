import Header from './components/Header';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Advice from './components/AdviceList';
import Accounts from './components/AccountHome';
import GoalInput from './components/Goals';
//import GoalInput from './components/Goals';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Accounts/>}/>
          <Route path="/transactions" element={<h1>Transactions</h1>}/>
          <Route path="/advice" element={<Advice/>}/>
          <Route path="/goals" element={<GoalInput/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


import Header from './components/Header';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Advice from './components/AdviceList';
import Accounts from './components/AccountHome';
import Transactions from './components/TransactionHome';
import Saving from './components/Saving';
import IRA from './components/IRA';
import Budgeting from './components/Budgeting';
import Retirement from './components/Retirement';
import GoalInput from './components/Goals';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Accounts/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/advice" element={<Advice/>}/>
          <Route path="/advice/saving" element={<Saving/>}/>
          <Route path="/advice/ira" element={<IRA/>}/>
          <Route path="/advice/budgeting" element={<Budgeting/>}/>
          <Route path="/advice/retirement" element={<Retirement/>}/>
          <Route path="/goals" element={<GoalInput/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;


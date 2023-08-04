import Header from './components/Header';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Advice from './components/AdviceList';
import Accounts from './components/AccountHome';
import Transactions from './components/TransactionHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Accounts/>}/>
          <Route path="/transactions" element={<Transactions/>}/>
          <Route path="/advice" element={<Advice/>}/>
          <Route path="/goals" element={<h1>Goals</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

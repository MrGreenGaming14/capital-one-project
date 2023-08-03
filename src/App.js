import Header from './components/Header';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Advice from './components/AdviceList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/transactions" element={<h1>Transactions</h1>}/>
          <Route path="/advice" element={<h1>Welcome, to financial literacy.<Advice/></h1>}/>
          <Route path="/goals" element={<h1>Goals</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

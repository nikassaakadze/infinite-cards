import './App.css';
import Feed from './components/Feed';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import User from './pages/User';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route exact path='/user' element={[<Header key="header" />, <User key="user" />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import './App.css';
import Feed from './components/Feed';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route exact path='/user' element={<User />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

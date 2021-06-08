import {
  BrowserRouter as Router
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Display from './components/Display';

import './css/0-main.css';

function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Display />
      </Router>
    </div>
  );
}

export default App;
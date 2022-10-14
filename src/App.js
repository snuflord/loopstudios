import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='about' element={<AboutUs />}/>
      </Routes>
    </Router>
  );
}

export default App;

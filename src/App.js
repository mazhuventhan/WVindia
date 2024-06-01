import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import FootBox from './Components/boxFoot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/header' element={<Header />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/footbox' element={<FootBox />} />

      </Routes>
    </Router>
  );
}

export default App;

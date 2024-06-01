import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/header' element={<Header />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </Router>
  );
}

export default App;

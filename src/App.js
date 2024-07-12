import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import FootBox from './Components/boxFoot';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import HelmetWrapper from './Components/helmetWrapper';
// import ProtectedRoute from './Components/protectedRoute';

import {seoTitle,seoDescription} from "../src/Config/seo";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HelmetWrapper />}>
          <Route path='/header' element={<Header />} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/footbox' element={<FootBox />} />
          <Route path='/' element={<Home title={seoTitle.home} description={seoDescription.home} />} />
          <Route path='/login' element={<Login title="Login - My Awesome App" description="Login to access your account on my awesome app" />} />
          {/* <Route path="/home" element={<ProtectedRoute ><Home /></ProtectedRoute>} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

import React from 'react';
import LandingPage from './components/LandingPage';
import AdminPage from './AdminPage';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Navbar/Services';
import About from './components/Navbar/About';
import Footer from './components/Footer/Footer';

import { Link } from 'react-router-dom';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Link to="/admin">Admin Panel</Link>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
        
      <Footer/>
    </Router>
  );
}

export default App;

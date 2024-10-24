import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header'; // Adjust the path as necessary
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound'; // 404 Component
import 'flowbite/dist/flowbite.min.css';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ 
      backgroundColor: isDarkMode ? 'black' : 'white', 
      color: isDarkMode ? 'white' : 'black', 
      minHeight: '100vh' 
    }}>
      <Router>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> {/* 404 Page */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

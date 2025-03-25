import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Content from './Content';
import List from './List';
import Footer from './Footer';
import About from './About'; // Import About component
import Contact from './Contact'; // Import Contact component
import './App.css'; // Import global CSS

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />        {/* Home page */}
          <Route path="/about" element={<About />} />     {/* About page */}
          <Route path="/list" element={<List />} />       {/* List page */}
          <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

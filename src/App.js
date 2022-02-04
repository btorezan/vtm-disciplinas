import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Disciplinas from './components/Pages/Disciplinas';

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/disciplinas" element={<Disciplinas/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  
  );
}

export default App;

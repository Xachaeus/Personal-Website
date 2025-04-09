import React from 'react';
import './App.css';
import './Style/app.css';
import { HeaderBar } from './Components/HeaderBar.js';
import { Home } from './Pages/Home.js';
import { About } from './Pages/About.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
        <HeaderBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

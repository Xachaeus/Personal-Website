import React from 'react';
import './App.css';
import './Style/app.css';
import { DropdownMenu, HeaderBar } from './Components/HeaderBar.js';
import { Home } from './Pages/Home.js';
import { About } from './Pages/About.js';
import { Projects } from './Pages/Projects.js';
import { Project1 } from './Pages/Project1.js';
import { Project2 } from './Pages/Project2.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
        <DropdownMenu/>
        <HeaderBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
            <Route path="/projects/project1" element={<Project1/>}/>
            <Route path="/projects/project2" element={<Project2/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

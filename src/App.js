import React from 'react';
import './App.css';
import './Style/app.css';
import { DropdownMenu, HeaderBar } from './Components/HeaderBar.js';
import { Home } from './Pages/Home.js';
import { About } from './Pages/About.js';
import { Projects } from './Pages/Projects.js';
import { NTEA } from './Pages/NTEA.js';
import { LLM4VV } from './Pages/LLM4VV.js';
import { Blog, posts } from './Pages/Blog.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function GeneratePostLinks() {
  const return_val = [
    {path: "/", element: <Home/>},
    {path:"/about", element:<About/>},
    {path:"/projects", element:<Projects/>},
    {path:"/projects/n-tea", element:<NTEA/>},
    {path:"/projects/llm4vv", element:<LLM4VV/>},
    {path:"/blog", element:<Blog/>},
  ];
  for (let post of posts){
    let path = post.title.toLowerCase();
    return_val.push({path:"/blog/"+path, element:post.element})
  }
  return return_val;
}

const routes = GeneratePostLinks();

function App() {
  return (
    <div className="ContentWrapper">
      <BrowserRouter>
        <DropdownMenu/>
        <HeaderBar/>
        <main>
          <Routes>
            {
              routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element}/>
              ))
            }
          </Routes>
        </main>
        {/*
        <footer className="Footer">
          <p>Zachariah Sollenberger, 2025</p>
        </footer>
        */}
      </BrowserRouter>
    </div>
  );
}

export default App;

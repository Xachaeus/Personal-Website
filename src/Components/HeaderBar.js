import React from 'react';
import '../Style/app.css';
import { Link } from 'react-router-dom';
import { BrowserView } from 'react-device-detect';

import MenuIcon from '../Images/menu-icon.webp';

export function DropdownMenu() {
  const [open, setOpen] = React.useState(false);
  const [notYetPressed, setNotYetPressed] = React.useState(true);
  return (
    <div>
      <div className="DropdownMenuButtonParent">
        <button className="DropdownMenuButton" onClick={() => {setOpen(!open); setNotYetPressed(false);}}>
            <img className="DropdownMenuButtonImage" src={MenuIcon} alt="..."/>
        </button>
        
      </div>
      <div className={open? "DropdownMenuContainerVisible" :  (notYetPressed? "Invisible" : "DropdownMenuContainerInvisible")}>
        <ul>
          <li onClick={() => setOpen(false)}><Link className="MenuLink" to="/">Home</Link></li>
          <li onClick={() => setOpen(false)}><Link className="MenuLink" to="/about">About</Link></li>
          <li onClick={() => setOpen(false)}><Link className="MenuLink" to="/projects">Projects</Link></li>
          <li onClick={() => setOpen(false)}><Link className="MenuSubLink" to="/projects/project1">Project 1</Link></li>
          <li onClick={() => setOpen(false)}><Link className="MenuSubLink" to="/projects/project2">Project 2</Link></li>
          <li onClick={() => setOpen(false)}><Link className="MenuLink" to="/blog">Blog</Link></li>
        </ul>
      </div>
    </div>
  )
}

export function HeaderBar() {
    return (
        <header className="HeaderBar">

            <BrowserView>
                <Link className="MenuLink" to="/">Zachariah Sollenberger</Link>
            </BrowserView>
                
        </header>
    )
}
import React from 'react';
import './App.css';
import './Style/app.css';



function DropdownMenu() {
  const [open, setOpen] = React.useState(false);
  const [firstOpen, setFirstOpen] = React.useState(false);
  return (
    <div>
      <div className="DropdownMenuButtonParent">
        <button className="DropdownMenuButton" onClick={() => {setOpen(!open); setFirstOpen(true)}}>...</button>
        <p>Menu</p>
      </div>
      <div className={open? "DropdownMenuContainerVisible" : (firstOpen? "DropdownMenuContainerInvisible" : "Invisible")}>
        <p>This is some example text!</p>
      </div>
    </div>
  )

}

function App() {
  return (
    <div className="HomeBackground">
      <header className="HeaderBar">
        <DropdownMenu/>
        
        <p>Zachariah Sollenberger</p>
        
      </header>
      <p>This site is still in production; please come back later to see the completed site!</p>
    </div>
  );
}

export default App;

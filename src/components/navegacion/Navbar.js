import React from "react";
import {Link} from 'react-router-dom';


function Navbar() {
  
    return (
      
<div>
        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link to='/'>
        <img src='./foto-logo.png' width='50'/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link"  to='/' >Inicio</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link"  to='/pga' >Pga Tour</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link"  to='/tienda' >Tienda</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link"  to='/jugadores' >Jugadores</Link>
        </li>
        

      </ul>
    </div>
    <Link to='./contacto'>
          <i className="bi bi-person-circle"></i>
    </Link>
  </div>
</nav>


 </div>
      
    );
  }
  
  export default Navbar;
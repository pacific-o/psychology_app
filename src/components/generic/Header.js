import React from 'react';
import logo from '../image/logo.png';
import { Link } from "react-router-dom";

const Header = (props) => {
  

  return (
     <header>
       <div className="header-container p-h container">
            <div className="logo">
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>     
            <div className="side-menu">
                <p><i className="fas fa-bars"></i></p>
            </div>
        </div>
     </header>
  )
}

export default Header;
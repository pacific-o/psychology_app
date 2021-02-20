import React from 'react';
import logo from '../image/logo.png';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { setLoginInfo } from '../../Redux';


const Header = (props) => {
   
   const logOut = () => {
         props.setLoginInfo(false)
   }  

  return (
     <header>
       <div className="header-container p-h container">
            <div className="logo">
                <Link to="/" onClick={logOut}><img src={logo} alt="logo" /></Link>
            </div>     
        </div>
     </header>
  )
}

const mapDispatchToProps = (dispatch) => {
   return {
    setLoginInfo : (status) => dispatch(setLoginInfo(status))
   }
}


export default connect(null,mapDispatchToProps)(Header);
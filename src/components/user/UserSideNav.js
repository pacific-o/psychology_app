import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoginInfo } from '../../Redux';


const SideNav = (props) => {

     const logOut = () => {
         props.setLoginInfo(false, {})
   }  

  return (
    <div className="sideNav">
        <div className="side-header p-h">
           <h2>پرسونالوژی</h2>
           <h4>شخصیت سنجی</h4>
        </div>
        <div className="side-links p-h">
            <ul>
                <li className="nav-item"><NavLink to={`/dashboard`} activeStyle={{fontWeight: "bold",color: "#ffb142"}}>داشبورد</NavLink></li>
                <li className="nav-item"><NavLink to={`/dashboard/MyTests`} activeStyle={{fontWeight: "bold",color: "#ffb142"}}>آزمون های من</NavLink></li>
                <li className="nav-item"><NavLink to={`/dashboard/MyProfile`} activeStyle={{fontWeight: "bold",color: "#ffb142"}}>ویرایش پروفایل</NavLink></li>
                <li className="nav-item"><NavLink to={`/dashboard/transaction`} activeStyle={{fontWeight: "bold",color: "#ffb142"}}>تراکنش مالی</NavLink></li>
                <li className="nav-item" onClick={logOut}><Link to={`/`}>خروج</Link></li>
            </ul>
        </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
   return {
    setLoginInfo : (status, data) => dispatch(setLoginInfo(status,data))
   }
}


export default connect(null,mapDispatchToProps)(SideNav);
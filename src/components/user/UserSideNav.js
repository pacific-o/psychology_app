import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { setLoginInfo } from '../../Redux';
import logo from '../image/logo.png';
import axios from "axios";
import { API } from "../generic/Api";



const SideNav = (props) => {

  const logOut = () => {
    props.setLoginInfo(false, {});
    axios.post(`${API}/user/logout`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const openHandler = () => {
    document.getElementById("aside").classList.toggle("aside-open");
    document.getElementById("dash-content").classList.toggle("dash-content-collapse");
    document.getElementById("side-links").classList.toggle("dash-open");
    document.getElementById("dash-side-nav").classList.toggle("dash-open");
    document.getElementById("hidden-links").classList.toggle("hidden");

  } 

  return (
    <div className="side-nav">
      <div className="side-header p-h">
        <p onClick={openHandler}><i className="far fa-dot-circle"></i></p>
        <h2>پرسونالوژی</h2>
        <img src={logo} alt="logo" />
      </div>
      <div className="dash-side-nav rtl" id="dash-side-nav">
        <p><NavLink to={`/dashboard`}><i className="fas fa-home"></i> پیشخوان</NavLink></p>
      </div>
        <div className="side-links p-h rtl" id="side-links">
          <div className="side-part mt-h-1">
            <p className="links-title">آزمون های روانشناسی</p>
            <div className="sub-links">
              <NavLink to={`/dashboard/assessments`} activeStyle={{fontWeight: "bold",color: "#d4d1fa",backgroundImage:"linear-gradient(to right, #d4d1fa, #7367f0)",}}><i className="fas fa-list-ul"></i> لیست آزمون ها</NavLink>
            </div>
          </div>
          <div className="side-part mt-h-1">
            <p className="links-title">ناحیه کاربری</p>
            <div className="sub-links">
              <NavLink to={`/dashboard/MyTests`} activeStyle={{fontWeight: "bold",color: "#d4d1fa",backgroundImage:"linear-gradient(to right, #d4d1fa, #7367f0)",}}><i class="fas fa-vial"></i> آزمون های من</NavLink>
              <NavLink to={`/dashboard/MyProfile`} activeStyle={{fontWeight: "bold",color: "#d4d1fa",backgroundImage:"linear-gradient(to right, #d4d1fa, #7367f0)",}}><i class="far fa-address-card"></i> پروفایل کاربری</NavLink>
              <NavLink to={`/dashboard/transaction`} activeStyle={{fontWeight: "bold",color: "#d4d1fa",backgroundImage:"linear-gradient(to right, #d4d1fa, #7367f0)",}}><i class="fas fa-money-check-alt"></i> تراکنش های مالی</NavLink>              
            </div>
          </div>
          <div className="side-part mt-h-1">
            <p className="links-title">دیگر امکانات</p>
            <div className="sub-links">
              <NavLink to activeStyle={{fontWeight: "bold",color: "#d4d1fa",backgroundImage:"linear-gradient(to right, #d4d1fa, #7367f0)",}}><i className="fas fa-cog"></i> تنضیمات</NavLink>
              <Link to={`/`} onClick={logOut}><i className="fas fa-sign-out-alt"></i> خروج</Link>
            </div>        
          </div>
        </div>
        <div className="hidden-links rtl" id="hidden-links">
          <p><i className="fas fa-home"></i></p>
          <p><i className="fas fa-list-ul"></i></p>
          <p><i class="fas fa-vial"></i></p>
          <p><i class="far fa-address-card"></i></p>
          <p><i class="fas fa-money-check-alt"></i></p>
          <p><i className="fas fa-cog"></i></p>
          <p><i className="fas fa-sign-out-alt"></i></p>
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
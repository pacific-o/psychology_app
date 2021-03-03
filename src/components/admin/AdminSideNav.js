import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setLoginInfo } from "../../Redux";
import axios from "axios";
import { API } from "../generic/Api";
import logo from '../image/logo.png';


const AdminSideNav = (props) => {

  const showHandler = (e) => {
    let childNum = e.target.nextSibling.children.length;
    if (e.target.nextSibling.style.height == "0px") {
      e.target.nextSibling.style.height = `${childNum * 45}px`;
      e.target.children[1].style.transform = "rotateX(180deg)"
    } else {
      e.target.nextSibling.style.height = 0;
      e.target.children[1].style.transform = "rotateX(0deg)"
    }
  };

  const openHandler = () => {
    document.getElementById("aside").classList.toggle("aside-open");
    document.getElementById("dash-content").classList.toggle("dash-content-collapse")
  }

  const logOut = () => {
    props.setLoginInfo(false, {});
    axios.post(`${API}/user/logout`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="side-nav">
      <div className="side-header p-h">
       <p onClick={openHandler}><i className="far fa-dot-circle"></i></p>
        <h2>پرسونالوژی</h2>
        <img src={logo} alt="logo" />
      </div>
      <div className="dash-side-nav rtl">
        <p><i className="fas fa-home"></i> پیشخوان</p>
      </div>
      <div className="side-links rtl">
        <div className="side-part mt-h-1">
          <p className="links-title">ناحیه کاربری</p>
          <div className="sub-links">
            <p onClick={showHandler}><i className="fas fa-user-alt"></i> مدیریت کاربران      <i className="fas fa-chevron-down"></i></p>
            <ul className="links-container">
              <li className="nav-link">
                <NavLink to={`/dashboard/UsersList`} activeStyle={{fontWeight: "bold",color: "#d4d1fa",backgroundImage:"linear-gradient(to right, #d4d1fa, #7367f0)",}}><i className="fas fa-users"></i> لیست کاربران </NavLink>
              </li>
              <li className="nav-link">
                <NavLink to activeStyle={{fontWeight: "bold",color: "#d4d1fa",backgroundImage:"linear-gradient(to right, #d4d1fa, #7367f0)",}}> <i className="fas fa-user-plus"></i> کاربر جدید</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to activeStyle={{fontWeight: "bold",color: "#d4d1fa",backgroundImage:"linear-gradient(to right, #d4d1fa, #7367f0)",}}><i className="fas fa-shield-alt"></i> سطوح دسترسی</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="side-part mt-h-1">
          <p className="links-title">ناحیه آزمون ها</p>
          <div className="sub-links">
            <p onClick={showHandler}><i className="fas fa-file-alt"></i> مدیریت آزمون ها <i className="fas fa-chevron-down"></i></p>
            <ul className="links-container">
              <li className="nav-link">
                <NavLink to activeStyle={{fontWeight: "bold",color: "#d4d1fa",backgroundImage:"linear-gradient(to right, #d4d1fa, #7367f0)",}}><i className="fas fa-list-ul"></i> لیست آزمون ها</NavLink>
              </li>
              <li className="nav-link">
                <NavLink to activeStyle={{fontWeight: "bold",color: "#d4d1fa",backgroundImage:"linear-gradient(to right, #d4d1fa, #7367f0)",}}><i className="far fa-check-square"></i> آزمون جدید</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="side-part mt-h-1">
          <p className="links-title">امور مالی</p>
          <div className="sub-links">
            <NavLink to activeStyle={{fontWeight: "bold",color: "#d4d1fa",backgroundImage:"linear-gradient(to right, #d4d1fa, #7367f0)",}}><i className="fas fa-shopping-cart"></i> تراکنش ها</NavLink>
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
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginInfo: (status, data) => dispatch(setLoginInfo(status, data)),
  };
};

export default connect(null, mapDispatchToProps)(AdminSideNav);

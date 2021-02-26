import React from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setLoginInfo } from "../../Redux";
import axios from "axios";
import { API } from "../generic/Api";

const AdminSideNav = (props) => {
  const openHnadler = (e) => {
    e.target.nextSibling.classList.toggle("open");
  };

  const logOut = () => {
    props.setLoginInfo(false, {});
    axios
      .post(`${API}/user/logout`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="sideNav">
      <div className="side-header p-h">
        <h2>پرسونالوژی</h2>
        <h4 className="mt-h-1">شخصیت سنجی</h4>
        <h4 className="mt-h-1">پنل مدیریت</h4>
      </div>
      <div className="side-links p-h">
        <ul>
          <li className="nav-item">
            <NavLink to={`/dashboard`} activeStyle={{fontWeight: "bold", color: "#d4d1fa", backgroundImage: "linear-gradient(to right, #d4d1fa, #7367f0)",}}>داشبورد <i class="fas fa-house-user"></i></NavLink>
          </li>
          <li className="nav-item">
            <p onClick={openHnadler}>مدیریت کاربران <i class="fas fa-user-alt"></i></p>
            <ul className="links-container">
              <li className="nav-link">
                <NavLink to={`/dashboard/UsersList`} activeStyle={{fontWeight: "bold",color: "#d4d1fa",backgroundImage:"linear-gradient(to right, #d4d1fa, #7367f0)",}}>کاریران <i class="far fa-circle"></i></NavLink>
              </li>
              <li className="nav-link">
                <NavLink
                  to
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#d4d1fa",
                    backgroundImage:
                      "linear-gradient(to right, #d4d1fa, #7367f0)",
                  }}
                >
                  سطوح دسترسی <i class="far fa-circle"></i>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <p onClick={openHnadler}>
              مدیریت آزمون ها <i class="fas fa-file-alt"></i>
            </p>
            <ul className="links-container">
              <li className="nav-link">
                <NavLink
                  to
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#d4d1fa",
                    backgroundImage:
                      "linear-gradient(to right, #d4d1fa, #7367f0)",
                  }}
                >
                  آزمون ها <i class="far fa-circle"></i>
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink
                  to
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#d4d1fa",
                    backgroundImage:
                      "linear-gradient(to right, #d4d1fa, #7367f0)",
                  }}
                >
                  ایجاد آزمون <i class="far fa-circle"></i>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <p onClick={openHnadler}>
              مدیریت مالی <i class="fas fa-dollar-sign"></i>
            </p>
            <ul className="links-container">
              <li className="nav-link">
                <NavLink
                  to
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#d4d1fa",
                    backgroundImage:
                      "linear-gradient(to right, #d4d1fa, #7367f0)",
                  }}
                >
                  سوابق مالی <i class="far fa-circle"></i>
                </NavLink>
              </li>
              <li className="nav-link">
                <NavLink
                  to
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#d4d1fa",
                    backgroundImage:
                      "linear-gradient(to right, #d4d1fa, #7367f0)",
                  }}
                >
                  سوابق مالی <i class="far fa-circle"></i>
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item" onClick={logOut}>
            <Link to={`/`}>
              خروج <i class="fas fa-sign-out-alt"></i>
            </Link>
          </li>
        </ul>
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

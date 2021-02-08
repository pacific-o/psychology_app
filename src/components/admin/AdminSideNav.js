import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const AdminSideNav = (props) => {
   
  const openHnadler = (e) => {
	e.target.nextSibling.classList.toggle('open');
  }

  return (
    <div className="sideNav">
        <div className="side-header p-h">
           <h2>پرسونالوژی</h2>
           <h4 className="mt-h-1">شخصیت سنجی</h4>
           <h4 className="mt-h-1">پنل مدیریت</h4>
        </div>
        <div className="side-links p-h">
            <ul>
                <li className="nav-item"><NavLink to={`/dashboard`} activeStyle={{fontWeight: "bold",color: "#ffb142"}}>داشبورد</NavLink></li>
                <li className="nav-item">
                  <p onClick={openHnadler}>مدیریت کاربران <i className="far fa-circle"></i></p>
                  <ul className="links-container">
                    <li className="nav-link"><NavLink  to={`/dashboard/UsersList`} activeStyle={{fontWeight: "bold",color: "#ffb142"}}>کاریران</NavLink></li>
                    <li className="nav-link">سطوح دسترسی</li>              
                  </ul>
                </li>                             
                <li className="nav-item">
                  <p onClick={openHnadler}>مدیریت آزمون ها <i className="far fa-circle"></i></p>
                  <ul className="links-container">
                    <li className="nav-link">آزمون ها</li>
                    <li className="nav-link">ایجاد آزمون</li>
                  </ul>
                </li>
                <li className="nav-item">
                  <p onClick={openHnadler}>مدیریت مالی <i className="far fa-circle"></i></p>
                  <ul className="links-container">
                    <li className="nav-link">سوابق مالی</li>
                    <li className="nav-link">سوابق مالی</li>
                  </ul>
                </li>
                <li className="nav-item"><Link to={`/`}>خروج</Link> <i className="far fa-circle"></i></li>                
            </ul>
        </div>
    </div>  )
}

export default AdminSideNav;

<NavLink to={`/dashboard/MyProfile`} activeStyle={{fontWeight: "bold",color: "#ffb142"}}>ویرایش پروفایل</NavLink>


import React from 'react';
import {Link, NavLink} from 'react-router-dom';


const SideNav = (props) => {
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
                <li className="nav-item"><Link to={`/`}>خروج</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default SideNav;
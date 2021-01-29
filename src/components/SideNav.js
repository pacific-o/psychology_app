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
                <li><NavLink to={`/dashboard`} activeStyle={{fontWeight: "bold",color: "red"}}>داشبورد</NavLink></li>
                <li><NavLink to={`/dashboard/MyTests`} activeStyle={{fontWeight: "bold",color: "red"}}>آزمون های من</NavLink></li>
                <li><NavLink to={`/dashboard/MyProfile`} activeStyle={{fontWeight: "bold",color: "red"}}>ویرایش پروفایل</NavLink></li>
                <li><NavLink to={`/dashboard/TestsList`} activeStyle={{fontWeight: "bold",color: "red"}}>آزمون های سایت</NavLink></li>
                <li><NavLink to={`/dashboard/transaction`} activeStyle={{fontWeight: "bold",color: "red"}}>تراکنش مالی</NavLink></li>
                <li><Link to={`/`}>خروج</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default SideNav;
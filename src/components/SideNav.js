import React from 'react';
import {Link} from 'react-router-dom';


const SideNav = (props) => {
  return (
    <div className="sideNav">
        <div className="side-header p-h">
           <h2>پرسونالوژی</h2>
           <h4>شخصیت سنجی</h4>
        </div>
        <div className="side-links p-h">
            <ul>
                <li><Link to={`/dashboard`}>داشبورد</Link></li>
                <li><Link to={`/dashboard/MyTests`}>آزمون های من</Link></li>
                <li><Link to={`/dashboard/MyProfile`}>ویرایش پروفایل</Link></li>
                <li><Link to={`/dashboard/TestsList`}>آزمون های سایت</Link></li>
                <li><Link to={`/dashboard/transaction`}>تراکنش مالی</Link></li>
                <li><Link to={`/`}>خروج</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default SideNav;
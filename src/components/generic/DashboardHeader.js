import React from 'react';
import person from "../image/person.jpg";


const DashboardHeader = (props) => {
  return (
    <div className="dash-header p-h-2">
        <div className="dash-header-info">
            <img src={person} alt="person" />
            <div>
                <p>جواد</p>
                <p>مدیریت</p>
            </div>
            <p><i class="far fa-bell"></i></p>
            <p><i class="fas fa-search"></i></p>
            <p><i class="fas fa-expand"></i></p>
        </div>
        <div>
            <p><i class="far fa-envelope"></i></p>
        </div>
    </div>
  )
}

export default DashboardHeader;
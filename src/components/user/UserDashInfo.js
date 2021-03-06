import React from 'react';
import person from '../image/person.jpg';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';


const DashInfo = (props) => {
    const gender = props.userInfo.gender === "1" ? "مرد" : "زن";
  return (
    <div className="dash-info-container mt-h-2">
        <div className="personal-info">
            <img src={person} alt="person" />
            <p className="mt-h-1">{props.userInfo.name}</p>
            <p className="mt-h-1">کاربر بخش آزمون ها</p>
            <p className="mt-h-1"><Link to={`/dashboard/MyProfile`}>ویرایش مشخصات</Link></p>
            <p className="mt-h-1">{props.userInfo.email} :آدرس ایمیل</p>
            <p className="mt-h-1">سن: {props.userInfo.age}</p>
            <p className="mt-h-1">جنسیت: {gender}</p>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        userInfo : state.login.userInfo
    }
}


export default connect(mapStateToProps)(DashInfo);
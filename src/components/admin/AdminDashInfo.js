import React from 'react';
import person from '../image/person.png';
import { connect } from 'react-redux';



const AdminDashInfo = (props) => {
  return (
    <div className="rtl mt-h-2">
            <img src={person} alt="person" />
            <p className="mt-h-1">{props.userInfo.name}</p>
            <p className="mt-h-1">کاربر بخش مدیریت</p>
            <p className="mt-h-1">{props.userInfo.email} :آدرس ایمیل</p>
            <p className="mt-h-1">سن:{props.userInfo.age}</p>
            <p className="mt-h-1">جنسیت: {props.userInfo.gender}</p>
    </div>
  )
}
const mapStateToProps = (state) => {
    return {
        userInfo : state.login.userInfo
    }
}

export default connect(mapStateToProps)(AdminDashInfo);
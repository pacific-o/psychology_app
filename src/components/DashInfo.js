import React from 'react';
import person from './image/person.png';
import {Link} from 'react-router-dom';

const DashInfo = (props) => {
  return (
    <div className="dash-info-container">
        <div className="test-info-container">
            <div className="test-info">
                <h3>آزمون های موجود</h3>
                <p className="test-num p-h">۵</p>
                <p className="p-h">مشاهده لیست آزمون ها</p>
            </div>
            <div className="test-info">
                <h3>آزمون های موجود</h3>
                <p className="test-num p-h">۵</p>
                <p className="p-h">مشاهده لیست آزمون ها</p>
            </div>
            <div className="test-info">
                <h3>آزمون های موجود</h3>
                <p className="test-num p-h">۵</p>
                <p className="p-h">مشاهده لیست آزمون ها</p>
            </div>
             <div className="test-info">
                <h3>آزمون های موجود</h3>
                <p className="test-num p-h">۵</p>
                <p className="p-h">مشاهده لیست آزمون ها</p>
            </div>                                   
        </div>
        <div className="personal-info">
            <img src={person} alt="person" />
            <p className="mt-h-1">علیرضا سلطانی</p>
            <p className="mt-h-1">کاربر بخش آزمون ها</p>
            <p className="mt-h-1"><Link to={`/dashboard/MyProfile`}>ویرایش مشخصات</Link></p>
            <p className="mt-h-1">a.soltani63@yahoo.com :آدرس ایمیل</p>
            <p className="mt-h-1">سن:٣٥</p>
            <p className="mt-h-1">جنسیت: نامشخص</p>
        </div>
    </div>
  )
}

export default DashInfo;
import React from 'react';
import person from '../image/person.png';


const AdminDashInfo = (props) => {
  return (
    <div className="rtl mt-h-2">
            <img src={person} alt="person" />
            <p className="mt-h-1">علیرضا سلطانی</p>
            <p className="mt-h-1">کاربر بخش مدیریت</p>
            <p className="mt-h-1">ویرایش مشخصات</p>
            <p className="mt-h-1">a.soltani63@yahoo.com :آدرس ایمیل</p>
            <p className="mt-h-1">سن:٣٥</p>
            <p className="mt-h-1">جنسیت: نامشخص</p>
    </div>
  )
}

export default AdminDashInfo;
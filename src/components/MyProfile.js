import React from 'react';
import edit from './image/2.png';


const MyProfile = (props) => {
  return (
    <div className="edit-container p-h">
        <img src={edit} alt="" />
        <form className="edit-form">
            <label for="name">نام و نام خانوادگی</label>
            <input className="mt-h-1" type="text" name="name" />
            <p className="comment">نام و نام خانوادگی خود را از این قسمت ویرایش کنید</p>
            <label for="email">آدرس ایمیل</label>            
            <input className="mt-h-1" type="email" name="email" value="a.soltani63@yahoo.com" readonly/>
            <p className="comment">برای تغییر ایمیل به بخش فنی وبسایت پیام دهید.</p>            
            <label for="age">سن</label>
            <input className="mt-h-1" type="number" name="age" />
            <p className="comment">سن خود را وارد کنید</p>            
            <label for="male">مرد</label>
            <input type="radio" name="gender" value="male" />
            <label for="female">زن</label>
            <input type="radio" name="gender" value="female" />
            <p className="comment">جنسیت خود را انتخاب کنید</p>            
            <label for="pwd1">رمز عبور</label>
            <input className="mt-h-1" type="password" name="pwd1" />
            <p className="comment">برای تغییر رمز عبور، رمز جدیدی را برای خود وارد کنید</p>            
            <input type="submit" id="submit" value="ذخیره اطلاعات" />
        </form>
    </div>
  )
}

export default MyProfile;
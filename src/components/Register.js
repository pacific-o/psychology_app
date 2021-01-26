import React from 'react';
import {Link} from 'react-router-dom'

const Register = (props) => {
  return (
    <div className="register-container mt-h-2">
        <div className="register-title">
            <h2 className="heading">به پرسونالوژی خوش آمدید</h2>
            <p className="text mt-h-1">لطفا اطلاعات زیر را برای ساختن اکانت، با دقت وارد کنید</p>
        </div>
        <div className="register-form mt-h-2">
            <label for="name">نام و نام خانوادگی خود را وارد کنید</label>
            <input className="m-h-1" type="text" name="name" />
            <label for="email">آدرس ایمیل خود را وارد کنید</label>
            <input className="m-h-1" type="email" name="email" />
            <label for="pwd1">رمز عبور</label>
            <input className="m-h-1" type="password" name="pwd1" />
            <label for="pwd2">تکرار رمز عبور</label>
            <input className="m-h-1" type="password" name="pwd2" />
            <input type="submit" id="submit" value="ثبت نام در پرسونالوژی" />
        </div>
        <div className="register-link mt-h-2">
            <p>قبلا ثبت نام کرده اید؟</p>
            <Link to={`/`}>وارد شوید...</Link>  
        </div>
    </div>
  )
}

export default Register;
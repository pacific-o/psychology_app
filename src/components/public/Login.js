import React from 'react';
import { Link } from 'react-router-dom';
import loginLogo from '../image/login.svg';




const Login = (props) => {

  return (
    <div className="account p-h mt-h-2">
      <div>
        <img src={loginLogo} />
      </div>
      <div className="account-container">
        <h2 className="heading">خوش آمدید!</h2>
        <p className="text mt-h-1">لطفا وارد حساب کاربری خود شوید</p>
        <form className="mt-h-2">
          <label for="email">ایمیل</label>
          <input className="m-h-1" type="email" name="email" placeholder="ایمیل خود را وارد نمایید" required/>
          <label for="pwd">رمز عبور</label>
          <input className="m-h-1" type="password" name="pwd" placeholder="پسوورد خود را وارد نمایید" required/>
          <input className="mt-h-1" type="checkbox" id="check" name="check" />
          <label for="check"> من را به خاطر بسپار!</label>
        </form>
        <div className="recovery-link mt-h-1">
          <Link to={`/password/reset`}>فراموشی رمز عبور!</Link>
        </div>
        <div className="test-link mt-h-2">
          <Link to={`/dashboard`}>ورود به پنل آزمون ها</Link>  
        </div>
        <div className="register-link mt-h-2">
          <p>کاربر جدید هستید ؟</p>
          <Link to="/register">ثبت نام کنید!</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;

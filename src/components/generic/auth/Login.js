import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loginLogo from '../../image/login.svg';
import { connect } from 'react-redux';
import { loginRequest } from '../../../Redux';
import {API} from '../Api';
import axios from 'axios';





const Login = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
      axios.get(`${API}/sanctum/csrf-cookie`)
        .then(response => console.log(response))
        .catch(err => console.log(err))

    },[] );

    const handleSubmit = () => {
       props.loginRequest(email,password);  
    }


   const setEmailHandler = (e) => {
    setEmail(e.target.value)
  }

   const setPassHandler = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className="account container p-h mt-h-2">
      <div>
        <img src={loginLogo} />
      </div>
      <div className="account-container rtl">
        <h2 className="heading">خوش آمدید!</h2>
        <p className="text mt-h-1" style={props.comment === "اطلاعات شما به درستی وارد نشده است" ? {color: 'red'} : {}}>{props.comment}</p>
        <form className="mt-h-2">
          <label for="email">ایمیل</label>
          <input className="m-h-1" type="email" name="email" onChange={setEmailHandler} placeholder="ایمیل خود را وارد نمایید" required/>
          <label for="pwd">رمز عبور</label>
          <input className="m-h-1" type="password" name="pwd" onChange={setPassHandler} placeholder="پسوورد خود را وارد نمایید" required/>
          <input className="mt-h-1" type="checkbox" id="check" name="check" />
          <label for="check"> من را به خاطر بسپار!</label>
        </form>
        <div className="recovery-link mt-h-1">
          <Link to={`/password/reset`}>فراموشی رمز عبور!</Link>
        </div>
        <div className="test-link mt-h-2">
          <Link to onClick={handleSubmit}>ورود به پنل آزمون ها</Link>  
        </div>
        <div className="register-link mt-h-2">
          <p>کاربر جدید هستید ؟</p>
          <Link to="/register">ثبت نام کنید!</Link>
        </div>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    comment : state.login.comment
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loginRequest : (email, password) => dispatch(loginRequest(email,password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

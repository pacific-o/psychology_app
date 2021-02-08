import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {useState} from 'react';
import { checkPass } from '../../Redux';


const Register = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [pass2, setPass2] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,email,pass1,pass2);
        props.checkPass(name,email,pass1,pass2);
  }

  const setNameHandler = (e) => {
    setName(e.target.value)
  }

   const setEmailHandler = (e) => {
    setEmail(e.target.value)
  }

   const setPass1Handler = (e) => {
    setPass1(e.target.value)
  }

   const setPass2Handler = (e) => {
    setPass2(e.target.value)
  }

  return (
    <div className="register-container mt-h-2">
        <div className="register-title">
            <h2 className="heading">به پرسونالوژی خوش آمدید</h2>
            <p className="text mt-h-1">{props.comment}</p>
        </div>
        <div className="register-form mt-h-2">
            <form onSubmit={handleSubmit} >
                <label for="name">نام و نام خانوادگی خود را وارد کنید</label>
                <input className="m-h-1" type="text" name="name" onChange={setNameHandler} required autofocus/>
                <label for="email">آدرس ایمیل خود را وارد کنید</label>
                <input className="m-h-1" type="email" onChange={setEmailHandler} name="email" required/>
                <label for="pwd1">رمز عبور</label>
                <input className="m-h-1" type="password" onChange={setPass1Handler} name="pwd1" required/>
                <label for="pwd2">تکرار رمز عبور</label>
                <input className="m-h-1" type="password" onChange={setPass2Handler} name="pwd2" required/>
               <input type="submit" id="submit" value="ثبت نام در پرسونالوژی" />
            </form>
        </div>
        <div className="register-link mt-h-2">
            <p>قبلا ثبت نام کرده اید؟</p>
            <Link to={`/`}>وارد شوید...</Link>  
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        comment : state.register.comment
    }
}

const mapDispatchToProps = (dispatch) => {
   return {
    checkPass : (name,email,pass1,pass2) => dispatch(checkPass(name,email,pass1,pass2))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
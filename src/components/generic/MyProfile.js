import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import edit from '../image/2.png';
import axios from 'axios';
import {API} from '../generic/Api';


const MyProfile = (props) => {

        const [password, setPassword] = useState("");
        const [name,setName] = useState("");
        const [age, setAge] = useState();
        const [gender, setGender] = useState("");
        const [message, setMessage] = useState("اطلاعات خود را به صورت کامل وارد نمایید")

    const setPassHandler = (e) => {
    setPassword(e.target.value)
  }

  const setNameHandler = (e) => {
    setName(e.target.value)
  }

   const setAgeHandler = (e) => {
    setAge(e.target.value)
  }

   const setGenderHandler = (e) => {
    setGender(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, password, age, gender);

         axios.put(`${API}/api/users/${props.userInfo.id}`,{ 
           name: name, 
           age: age, 
           password: password,
           gender: gender 
        })
        .then(response => {
            console.log(response);
            setMessage("اطلاعات شما به درستی ثبت گردید")
        })
        .catch(error => console.log(error))
  }




  return (
    <div className="edit-container p-h">
        <div>
        <p>{message}</p>
        <img src={edit} alt="" className="mt-h-2"/>
        </div>
        <form className="edit-form rtl" onSubmit={submitHandler}>
            <label for="name">نام و نام خانوادگی</label>
            <input className="mt-h-1" type="text" name="name" onChange={setNameHandler}/>
            <p className="comment">نام و نام خانوادگی خود را از این قسمت ویرایش کنید</p>
            <label for="email">آدرس ایمیل</label>            
            <input className="mt-h-1" type="email" name="email" value={props.userInfo.email} readonly/>
            <p className="comment">برای تغییر ایمیل به بخش فنی وبسایت پیام دهید.</p>            
            <label for="age">سن</label>
            <input className="mt-h-1" type="number" name="age" onChange={setAgeHandler}/>
            <p className="comment">سن خود را وارد کنید</p>            
            <label for="male">مرد</label>
            <input type="radio" name="gender" value="1" onClick={setGenderHandler}/>
            <label for="female">زن</label>
            <input type="radio" name="gender" value="0" onClick={setGenderHandler}/>
            <p className="comment">جنسیت خود را انتخاب کنید</p>            
            <label for="pwd1">رمز عبور</label>
            <input className="mt-h-1" type="password" name="pwd1" onChange={setPassHandler}/>
            <p className="comment">برای تغییر رمز عبور، رمز جدیدی را برای خود وارد کنید</p>            
            <input type="submit" id="submit" value="ذخیره اطلاعات" />
        </form>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        userInfo : state.login.userInfo
    }
}


export default connect(mapStateToProps)(MyProfile);
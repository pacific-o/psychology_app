import {LOGIN_REQUEST,SET_LOGIN_INFO} from './loginTypes';
import axios from 'axios';



export const setLoginInfo = (status,data ,message) => {
	return {
		type : SET_LOGIN_INFO,
		payLoad : {
			loginStatus : status,
			userInfo : data,
			comment : message,
		}
	}
}


export const loginRequest = (email, password) => {
  return (dispatch) => {
  		axios.post('http://37.152.178.76:54000/api/login', {
          email: email,
          password: password
        }).then(response => {
         console.log(response.data.data);
         console.log(response.data.status);
         if (response.data.status === "success") {
            dispatch(setLoginInfo(true, response.data.data, ''))
         } else if (response.data.status === "failed") {
            dispatch(setLoginInfo(false,'', "اطلاعات شما به درستی وارد نشده است"))
         }
             }).catch(error => {
           console.log(error);
  })
}}


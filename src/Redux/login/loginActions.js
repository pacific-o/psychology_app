import {LOGIN_REQUEST,SET_LOGIN_INFO} from './loginTypes';
import axios from 'axios';
import {API} from '../../components/generic/Api';




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
  		axios.post(`${API}/api/login`, {
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


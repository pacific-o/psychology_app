import {SET_LOGIN_INFO} from './loginTypes';


const initialState = {
	loginStatus : false,
	userInfo : {},
	comment : "لطفا وارد حساب کاربری خود شوید"
}


const setLoginReducer = (state = initialState, action) => {

	switch(action.type) {
		case SET_LOGIN_INFO : return {
         ...state,
            loginStatus : action.payLoad.loginStatus, 
            userInfo : action.payLoad.userInfo,
            comment : action.payLoad.comment
		}
		 default: return state;
		}
	}

	export default setLoginReducer;


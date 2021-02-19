import {SET_LOGIN_INFO} from './loginTypes';


const initialState = {
	comment : "لطفا وارد حساب کاربری خود شوید",
	role : "",
	loginStatus : false
}


const setLoginReducer = (state = initialState, action) => {

	switch(action.type) {
		case SET_LOGIN_INFO : return {
         ...state,
         comment : action.payLoad.comment,
         role : action.payLoad.role,
         loginStatus : action.payLoad.loginStatus 
		}
		 default: return state;
		}
	}

	export default setLoginReducer;


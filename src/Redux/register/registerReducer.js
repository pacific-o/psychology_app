import { SET_INFO, SET_COMMENT } from './registerTypes';

const initialState = {
	comment : "لطفا اطلاعات خود را وارد نمایید",
	userInfo : []
}


const setInfoReducer = (state = initialState, action) => {

	switch(action.type) {
		case SET_INFO : return {
         ...state,
         comment : action.payLoad.comment,
         userInfo : state.userInfo.push({
		name : action.payLoad.name,
		email : action.payLoad.email,
		password : action.password.pass
	})
		}
		case SET_COMMENT : return {
			...state,
			comment : action.payLoad.comment
		}
		 default: return state;
		}
	}

	export default setInfoReducer;


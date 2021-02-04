import { SET_INFO, SET_COMMENT } from './registerTypes';

const initialState = {
	comment : "لطفا اطلاعات خود را وارد نمایید",
	userInfo : [
	{
		name : "yasi",
		email : "yasi@yahoo.com",
		password : "yasi1234"
	},
	{
		name : "peji",
		email : "peji@yahoo.com",
		password : "peji1234"
	},
	{
		name : "soori",
		email : "soori@yahoo.com",
		password : "soori1234"
	},
		{
		name : "soori",
		email : "soori@yahoo.com",
		password : "soori1234"
	}
	]
}


const setInfoReducer = (state = initialState, action) => {

	switch(action.type) {
		case SET_INFO : return {
         ...state,
         comment : action.payLoad.comment,
         userInfolength : state.userInfo.push({
		    name : action.payLoad.name,
		    email : action.payLoad.email,
		    password : action.payLoad.pass
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


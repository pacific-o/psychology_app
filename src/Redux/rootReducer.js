import { combineReducers } from 'redux';
import registerReducer from './register/registerReducer';
import loginReducer from './login/loginReducer';



const rootReducer = combineReducers({
	register : registerReducer,
	login : loginReducer

})

export default rootReducer;


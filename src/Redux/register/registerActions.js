import { SET_INFO, SET_COMMENT } from './registerTypes';

const setInfo = (name,email,pass,comment) => {
	return {
		type : SET_INFO,
		payLoad : {
			name : name,
			email : email,
			pass : pass,
			comment : comment
		}
	}
}

const setComment = (comment) => {
	return {
		type : SET_COMMENT,
		payLoad : {
			comment : comment
		}
	}
}

export const checkPass = (name,email,pass1,pass2) => {
	if ( pass1.localeCompare(pass2) === 0 ) {
       return (dispatch) => {
       	   dispatch(setInfo(name,email,pass1,"اطلاعات شما با موفقیت ثبت گردید"));
       }
	} else {
        return (dispatch) => {
       	   dispatch(setComment("هر دو پسوورد می بایست مشابه باشند. مجددا اصلاح نمایید."))
       } 
	}

}
import React from 'react';

const Reset = (props) => {
  return (
    <div className="recovery-container mt-h-2 rtl">
      <div className="recovery-title">
        <h2 className="heading">بازیابی رمز</h2>
        <p className="text mt-h-1">جهت بازیابی رمز عبور خود می بایست ایمیل خود را در کارد زیر وارد کنید</p>
      </div>
      <div className="recovery-form mt-h-2">
         <label for="email">آدرس ایمیل خود را وارد کنید</label>
         <input className="m-h-1" type="email" name="email" />
         <input type="submit" id="submit" value="ارسال لینک بازیابی رمز عبور" />
      </div>

    </div>
  )
}

export default Reset;
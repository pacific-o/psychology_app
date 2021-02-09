import React from 'react';
import assess from '../image/assess.png';

const Transaction = (props) => {
  return (
    <div className="myTransaction-container">
       <div className="myTransaction-header p-h">
         <img src={assess} alt="" />
         <div>
             <h2>لیست تراکنش های من</h2>
             <p>در فهرست زیر،وضعیت آزمون های خود را مشاهده می کنید. برای مشاهده آزمون های موجود در وبسایت، اینجارا کلیک کنید.</p>
         </div>
       </div>
    </div>  )
}

export default Transaction;
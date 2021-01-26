import React from 'react';
import assess from './image/assess.png';


const MyTests = (props) => {
  return (
    <div className="myTest-container">
       <div className="myTest-header p-h">
         <img src={assess} alt="" />
         <div>
             <h2>لیست آزمون های من</h2>
             <p>در فهرست زیر،وضعیت آزمون های خود را مشاهده می کنید. برای مشاهده آزمون های موجود در وبسایت، اینجارا کلیک کنید.</p>
         </div>
       </div>
    </div>
  )
}

export default MyTests;
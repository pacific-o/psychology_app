import React , {useEffect, useState} from 'react';
import axios from 'axios';
import assess from '../image/assess.png';
import { Link } from "react-router-dom";
import Loader from './Loader';




const MyTests = (props) => {

  const [assessData, setData] = useState([]);
  const [loader, setLoader] = useState(false)


  useEffect(() => {
    setLoader(true);
     axios.get("http://37.152.178.76:54000/api/assessments")
     .then(response => {
        console.log(response.data.data);
        setLoader(false);
        setData(response.data.data);
        console.log(assessData)
  })
  }, [])




  let assessEl = assessData.map(item => (
      <div className="assess-info mt-h-2">
        <h3>{item.description}</h3>
        <img className="mt-h-1" src={assess} alt="" />
        <p className="mt-h-1">{item.name}</p>
        <div className="mt-h-1">
          <Link className="btn-info p-h-1">درباره آزمون</Link> 
          <Link className="btn-danger p-h-1">فایل خروجی</Link>
        </div>
        <Link to={`/dashboard/Test/${item.id}/${item.name}`} className="buy-btn p-h-1 mt-h-1">خرید آزمون</Link>  
      </div>
    
  ))



  return ( loader ? <Loader /> :
    <div className="asssessment-container">
      <div className="assess-info-container">
         {assessEl}
      </div>  
      <div className="myTest-header p-h mt-h-4">
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
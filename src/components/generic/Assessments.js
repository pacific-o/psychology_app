import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import assess from "../image/assess.png";
import { API } from "./Api";

const Assessments = (props) => {
  const [assessData, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    axios.get(`${API}/api/assessments`).then((response) => {
      console.log(response.data.data);
      setLoader(false);
      setData(response.data.data);
      console.log(assessData);
    });
  }, []);

  let assessEl = assessData.map((item) => (
    <div className="assess-info mt-h-2">
      <h3>{item.description}</h3>
      <img className="mt-h-2" src={assess} alt="" />
      <p className="mt-h-2">{item.name}</p>
      <div className="mt-h-2">
        <Link className="assess-btn m-h btn-info ">درباره آزمون</Link>
        <Link className="assess-btn m-h btn-danger ">فایل خروجی</Link>
      </div>
      <Link
        to={`/dashboard/Test/${item.id}/${item.name}`}
        className="buy-btn p-h-1 mt-h-2"
      >
        خرید آزمون
      </Link>
    </div>
  ));

  return loader ? (
    <Loader />
  ) : (
    <div className="assess-info-container">{assessEl}</div>
  );
};

export default Assessments;

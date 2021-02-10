import React, {useEffect, useState} from 'react';
import Loader from '../generic/Loader';

const UsersInfo = (props) => {

  const [loader, setLoader] = useState(false)

	const[list, setUsersList] = useState([])

  useEffect(() => {
        setLoader(true);
        fetch(`http://37.152.178.76:54000/api/users`)
        .then(res => res.json())
        .then(data => {
           console.log(data.data);
           setLoader(false);
           setUsersList(data.data)
        });
    }, []);


  return ( loader ? <Loader /> :
    <div className="users-container container mt-h-1">
      <table>
        <tr>
          <th colspan="3">ویرایش</th>
          <th>سطح کاربری</th>
          <th>ایمیل</th>
        </tr>
        {list.map(item => (
          <tr>
            <td><button className="btn btn-danger">حذف</button></td>
            <td><button className="btn btn-success">ویرایش</button></td>
            <td><button className="btn btn-info">مشاهده</button></td>
            <td>{item.role}</td>
            <td>{item.email}</td>
          </tr>
          ))}
     </table>
    </div>
  )
}

export default UsersInfo;
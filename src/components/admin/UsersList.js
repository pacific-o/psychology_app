import React, {useEffect, useState} from 'react';
import Loader from '../generic/Loader';

const UsersInfo = (props) => {

  const [loader, setLoader] = useState(false);
	const[list, setUsersList] = useState([]);
  const[selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
        setLoader(true);
        fetch(`http://37.152.178.76:54000/api/users`)
        .then(res => res.json())
        .then(data => {
           setLoader(false);
           setUsersList(data.data);
        });
    }, []);

  const selectorHandler = (e) => {
    list.map(item => {
      if(item.id == e.target.id){
        setSelectedUser(item)
      }
    });
    showSelected();
  }

  const showSelected = () => {
        document.querySelector(".hidden-user-info").classList.toggle("show-info");
  }


  return ( loader ? <Loader /> :
    <div className="users-container container mt-h-1">
      <table>
        <thead>
          <tr>
            <th colSpan="3">ویرایش</th>
            <th>سطح کاربری</th>
            <th>ایمیل</th>
          </tr>
         </thead>
         <tbody> 
        {list.map(item => (
          <tr>
            <td><button className="btn btn-danger" id={item.id}>حذف</button></td>
            <td><button className="btn btn-success" id={item.id} onClick={showSelected}>ویرایش</button></td>
            <td><button className="btn btn-info" id={item.id} onClick={selectorHandler}>مشاهده</button></td>
            <td>{item.role}</td>
            <td>{item.email}</td>
          </tr>
          ))}
        </tbody>
     </table>
     <div className="hidden-user-info">
      <form className="mt-h-4">
       <div className="user-info-container">
        <div className="row">
          <div className="rtl">
            <label for="name">نام</label>
            <input className="m-h-1" type="text" name="name" value={selectedUser.name}/>
          </div>
          <div className="rtl">
            <label for="email">ایمیل</label>
            <input className="m-h-1" type="email" name="email" value={selectedUser.email}/>
          </div>
          <div className="rtl">
            <label for="age">سن</label>
            <input className="m-h-1" type="text" name="age" value={selectedUser.age}/>
          </div>                    
        </div>
        <div className="row">
          <div className="rtl">
            <label for="gender">جنسیت</label>
            <input className="m-h-1" type="text" name="gender" value={selectedUser.gender}/>
          </div>
          <div className="rtl">
            <label for="phone">شماره تلفن</label>
            <input className="m-h-1" type="text" name="phone" value={selectedUser.phone}/>
          </div>
          <div className="rtl">
            <label for="role">سطح دسترسی</label>
            <input className="m-h-1" type="text" name="role" value={selectedUser.role}/>
          </div>                    
        </div> 
       </div>       
      </form>
      <button onClick={showSelected}>خروج</button>
     </div>
    </div>
  )
}

export default UsersInfo;
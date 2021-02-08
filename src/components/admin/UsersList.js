import React, {useEffect, useState} from 'react';

const UsersInfo = (props) => {

	const[list, setUsersList] = useState([])

  useEffect(() => {
        fetch(`http://37.152.178.76:54000/api/users`)
        .then(res => res.json())
        .then(data => {
           console.log(data.data);
           setUsersList(data.data)
        });
    }, []);

  const usersList = list.map(item => (
  	<div className="user-item">
        <p className="p-h-1">{item.email}</p>
        <p className="p-h-1">{item.role}</p>
        <button>مشاهده</button>
        <button>ویرایش</button>
        <button>حذف</button>
  	</div>
  ))


  return (
    <div className="users-container container mt-h-1">
     {usersList}
    </div>
  )
}

export default UsersInfo;
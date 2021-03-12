import React, { useEffect, useState } from "react";
import Loader from "../generic/Loader";
import axios from "axios";
import { API } from "../generic/Api";

const UsersInfo = (props) => {
  const [loader, setLoader] = useState(false);
  const [list, setUsersList] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    setLoader(true);
    axios
      .get(`${API}/api/users`)
      .then((response) => {
        console.log(response);
        setLoader(false);
        setUsersList(response.data.data);
      })
      .catch((err) => console.log(err));
  };

  const selectorHandler = (e) => {
    list.map((item) => {
      if (item.id == e.target.id) {
        setSelectedUser(item);
      }
    });
    showSelected();
  };

  const showSelected = () => {
    document.querySelector(".hidden-user-info").classList.toggle("show-info");
  };

  const toggleRemoveConfirmation = () => {
    document
      .querySelector(".delete-confirmation")
      .classList.toggle("show-info");
  };

  const showRemoveConfirmation = (e) => {
    const id = e.target.id;
    toggleRemoveConfirmation();
    setSelectedId(id);
  };

  const removeHandler = () => {
    axios
      .delete(`${API}/api/users/${selectedId}`)
      .then((response) => {
        if (response.status === 202) {
          getData();
        }
      })
      .catch((error) => console.log(error));
  };

  return loader ? (
    <Loader />
  ) : (
    <div>
    <div className="filter-container container p-h-2">
       <div><p>فیلترها</p></div>
       <div>
          <label for="gender">جنسیت:</label>
          <select id="gender" name="gender">
            <option value="همه">همه</option>
            <option value="کاربر">کاربر</option>
            <option value="کلینیک">کلینیک</option>
            <option value="مدیریت">مدیریت</option>
            </select>       
       </div>
       <div>
          <label for="confirmation">تایید شده:</label>
          <select id="confirmation" name="confirmation">
            <option value="همه">همه</option>
            <option value="بله">بله</option>
            <option value="خیر">خیر</option>
            </select>       
       </div>
       <div>
          <label for="role">نقش:</label>
          <select id="role" name="role">
            <option value="همه">همه</option>
            <option value="مرد">مرد</option>
            <option value="زن">زن</option>
            </select>       
       </div>              
    </div>
    <div className="users-container container mt-h-2 p-h-2">
      <table>
        <caption>لیست همه کاربران</caption>
        <thead>
          <tr>
            <th colSpan="3">ویرایش</th>
            <th>سطح کاربری</th>
            <th>وضعیت</th>            
            <th>ایمیل</th>
            <th>نام</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr>
              <td>
                <button id={item.id} onClick={showRemoveConfirmation}>حذف</button>
              </td>
              <td>
                <button id={item.id} onClick={showSelected}>ویرایش</button>
              </td>
              <td>
                <button id={item.id} onClick={selectorHandler}>مشاهده</button>
              </td>
              <td>{item.role}</td>
              <td>تایید شده</td>              
              <td>{item.email}</td>
              <td>{item.name}</td>
              <td>{item.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="hidden-user-info">
      <div className="user-content">
        <form>
          <div className="user-info-container p-h-2">
            <div className="row">
              <div className="rtl">
                <label for="name">نام</label>
                <input
                  className="m-h-1"
                  type="text"
                  name="name"
                  value={selectedUser.name}
                />
              </div>
              <div className="rtl">
                <label for="email">ایمیل</label>
                <input
                  className="m-h-1"
                  type="email"
                  name="email"
                  value={selectedUser.email}
                />
              </div>
              <div className="rtl">
                <label for="age">سن</label>
                <input
                  className="m-h-1"
                  type="text"
                  name="age"
                  value={selectedUser.age}
                />
              </div>
            </div>
            <div className="row">
              <div className="rtl">
                <label for="gender">جنسیت</label>
                <input
                  className="m-h-1"
                  type="text"
                  name="gender"
                  value={selectedUser.gender}
                />
              </div>
              <div className="rtl">
                <label for="phone">شماره تلفن</label>
                <input
                  className="m-h-1"
                  type="text"
                  name="phone"
                  value={selectedUser.phone}
                />
              </div>
              <div className="rtl">
                <label for="role">سطح دسترسی</label>
                <input
                  className="m-h-1"
                  type="text"
                  name="role"
                  value={selectedUser.role}
                />
              </div>
            </div>
          </div>
        </form>
        <button onClick={showSelected}>خروج</button>
      </div>
      </div>
      <div className="delete-confirmation">
      <div>
        <p>آیا از حذف این کابر اطمینان دارید ؟</p>
        <div>
          <button className="btn btn-success" onClick={removeHandler}>
            بلی
          </button>
          <button className="btn btn-danger" onClick={toggleRemoveConfirmation}>
            خیر
          </button>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default UsersInfo;

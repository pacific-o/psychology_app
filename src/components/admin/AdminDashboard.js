import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import DashboardHeader from "../generic/DashboardHeader";
import AdminSideNav from "./AdminSideNav";
import AdminDashInfo from "./AdminDashInfo";
import UsersList from "./UsersList";

const AdminDashboard = (props) => {
  return (
    <div className="dash-container">
      <div className="dash-content " id="dash-content">
        <DashboardHeader />
        <Switch>
          <Route exact path="/dashboard">
            <AdminDashInfo />
          </Route>
          <Route path="/dashboard/UsersList">
            <UsersList />
          </Route>
        </Switch>
      </div>
      <aside id="aside">
        <AdminSideNav />
      </aside>
    </div>
  );
};

export default AdminDashboard;

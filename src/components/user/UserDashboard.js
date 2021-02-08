import React from 'react';
import DashboardHeader from '../public/DashboardHeader';
import UserSideNav from './UserSideNav';
import UserDashInfo from './UserDashInfo';
import MyTests from '../public/MyTests';
import MyProfile from '../public/MyProfile';
import Test from '../public/Test';
import Transaction from '../public/Transaction';
import { Route, Switch } from "react-router-dom";


const UserDashboard = (props) => {
  return (
            <div className="dash-container container">
                <div className="dashContent">
                    <DashboardHeader />
                    <Switch>
                        <Route exact path="/dashboard">
                           <UserDashInfo />
                        </Route>
                        <Route path="/dashboard/MyTests">
                            <MyTests />
                        </Route>
                        <Route path="/dashboard/MyProfile">
                            <MyProfile />
                        </Route>
                        <Route path="/dashboard/Test/:id/name">
                            <Test />
                        </Route>
                        <Route path="/dashboard/transaction">
                            <Transaction />
                        </Route>
                   </Switch>
                </div>
                <aside>
                    <UserSideNav />
                </aside>
            </div>
  )
}

export default UserDashboard;
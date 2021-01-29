import React from 'react';
import DashboardHeader from './DashboardHeader';
import SideNav from './SideNav';
import DashInfo from './DashInfo';
import MyTests from './MyTests';
import MyProfile from './MyProfile';
import TestsList from './TestsList';
import Transaction from './Transaction';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const Dashboard = (props) => {
  return (
       <Router>
            <div className="dash-container container">
                <div className="dashContent">
                        <DashboardHeader />
                    <Switch>
                        <Route exact path="/dashboard">
                           <DashInfo />
                        </Route>
                        <Route path="/dashboard/MyTests">
                            <MyTests />
                        </Route>
                        <Route path="/dashboard/MyProfile">
                            <MyProfile />
                        </Route>
                        <Route path="/dashboard/TestsList">
                            <TestsList />
                        </Route>
                        <Route path="/dashboard/transaction">
                            <Transaction />
                        </Route>
                   </Switch>
                </div>
                <aside>
                    <SideNav />
                </aside>
            </div>
       </Router>
  )
}

export default Dashboard;
import React, { useEffect} from 'react';
import DashboardHeader from '../generic/DashboardHeader';
import UserSideNav from './UserSideNav';
import UserDashInfo from './UserDashInfo';
import MyTests from '../generic/MyTests';
import MyProfile from '../generic/MyProfile';
import Test from '../generic/Test';
import Assessments from '../generic/Assessments';
import Transaction from '../generic/Transaction';
import { Route, Switch } from "react-router-dom";
import { setLoginInfo } from '../../Redux';
import { connect } from 'react-redux';




const UserDashboard = (props) => {

   useEffect(() => {
      props.setLoginInfo(false)

    },[] );

  return (
            <div className="dash-container">
                <div className="dashContent container">
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
                        <Route path="/dashboard/Test/:id/:name">
                            <Test />
                        </Route>
                        <Route path="/dashboard/transaction">
                            <Transaction />
                        </Route>
                        <Route path="/dashboard/assessments">
                            <Assessments />
                        </Route>
                   </Switch>
                </div>
                <aside>
                    <UserSideNav />
                </aside>
            </div>
  )
}

const mapDispatchToProps = (dispatch) => {
   return {
    setLoginInfo : (status) => dispatch(setLoginInfo(status))
   }
}

export default connect(null,mapDispatchToProps)(UserDashboard);
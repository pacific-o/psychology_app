import React , { useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import DashboardHeader from '../generic/DashboardHeader';
import AdminSideNav from './AdminSideNav';
import AdminDashInfo from './AdminDashInfo';
import UsersList from './UsersList';
import { setLoginInfo } from '../../Redux';




const AdminDashboard = (props) => {

       useEffect(() => {
      props.setLoginInfo(false)

    },[] );

  return (
            <div className="dash-container container">
                <div className="dash-content ">
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
                <aside>
                    <AdminSideNav />
                </aside>
            </div>  )
}

const mapDispatchToProps = (dispatch) => {
   return {
    setLoginInfo : (status) => dispatch(setLoginInfo(status))
   }
}


export default connect(null,mapDispatchToProps)(AdminDashboard);
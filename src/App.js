import React from 'react';
import Header from './components/generic/Header';
import Login from './components/generic/auth/Login';
import Reset from './components/generic/auth/Reset';
import Register from './components/generic/auth/Register';
import Footer from './components/generic/Footer';
import UserDashboard from './components/user/UserDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import store from './Redux/store';
import './App.css';

const App = (props) => {
  return (
      <div className="App">    
      <Router>
          <Header />
          <Switch>
            <Route exact path="/">
               {props.status ? <Redirect to="/dashboard" /> : <Login /> } 
            </Route>
            <Route path="/password/reset">
               <Reset />
            </Route>
            <Route path="/register">
               <Register />
            </Route>
            <Route path="/dashboard">
             {props.role === 1 ? <AdminDashboard /> : <UserDashboard />}
            </Route>
          </Switch>
          <Footer />
      </Router>  
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    status : state.login.loginStatus,
    role : state.login.role
  }
}

export default connect(mapStateToProps)(App);

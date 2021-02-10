import React from 'react';
import Header from './components/generic/Header';
import Login from './components/generic/auth/Login';
import Reset from './components/generic/auth/Reset';
import Register from './components/generic/auth/Register';
import Footer from './components/generic/Footer';
import UserDashboard from './components/user/UserDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
               <Login />
            </Route>
            <Route path="/password/reset">
               <Reset />
            </Route>
            <Route path="/register">
               <Register />
            </Route>
            <Route path="/dashboard">
              <UserDashboard />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>  
    </Provider>
  );
}

export default App;

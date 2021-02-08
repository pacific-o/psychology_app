import React from 'react';
import Header from './components/public/Header';
import Login from './components/public/Login';
import Reset from './components/public/Reset';
import Register from './components/public/Register';
import Footer from './components/public/Footer';
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
              <AdminDashboard />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>  
    </Provider>
  );
}

export default App;

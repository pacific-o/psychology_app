import React from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Reset from './components/Reset';
import Register from './components/Register';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
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
              <Dashboard />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>  
    </Provider>
  );
}

export default App;

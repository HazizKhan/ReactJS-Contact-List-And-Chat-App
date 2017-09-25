import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './containers/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from './components/Login';
import Nav from './containers/Nav'
import Signup from './components/Signup';
import AuthGuard from './containers/AuthGuard'



class App extends Component {
  log() {
    var total = [0, 1, 2, 3].reduce(function (sum, value) {
      return sum + value;
    }, 0);
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Nav />
          <Route exact path='/' component={Login} />
          <Route path='/login' component={Login} />
          <Route path='/Signup' component={Signup} />
          <Route path="/home" component={AuthGuard}></Route>
        </div >
      </MuiThemeProvider >
    );
  }
}

export default App;

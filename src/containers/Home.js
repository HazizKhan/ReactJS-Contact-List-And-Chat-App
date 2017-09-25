import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UserService from './../services/User';
import * as firebase from 'firebase';


class Home extends Component {

  componentWillMount() {

  }
  render() {
    return (
      <div className="Home">
        <h1>Home</h1>

      </div>
    );
  }
}

export default Home;

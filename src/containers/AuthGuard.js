import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UserService from './../services/User';
import * as firebase from 'firebase';
import Home from './Home'
import { connect } from 'react-redux';
import AuthMiddleware from './../store/middleware/AuthMiddleware'
function mapStateToProps(state) {
  return {
    authState: state.AuthReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    authenticate: () => dispatch(AuthMiddleware.isAuthenticated()),

  };
}

class AuthGuard extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  componentWillReceiveProps(nextProps) {
    setTimeout(() => {

    })
  }
  renderAuthRoutes() {
    if (this.props.authState.isAuthenticated) {
      return (
        <Route path='/' component={Home}></Route>
      )
    }

  }
  componentWillMount() {
    this.props.authenticate();
    if (this.props.authState.isError) {
      this.props.history.push('/')
    }
  }
  render() {
    return (
      <div className="AuthGuard">
        {this.renderAuthRoutes()}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthGuard);
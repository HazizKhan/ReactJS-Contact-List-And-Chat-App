import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UserService from './../services/User';
import * as firebase from 'firebase';
import Home from './Home'
import { connect } from 'react-redux';
import AuthMiddleware from './../store/middleware/AuthMiddleware'
import AddMobile from './../components/AddMobile'
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
      if (this.props.authState.isError) {
        this.props.history.push('/')
      }

    })
  }
  renderAuthRoutes() {
    if (this.props.authState.isNewUser) {
      return (
        <AddMobile />
      )
    }
    else if (this.props.authState.isAuthenticated) {
      return (
        <Route path='/' component={Home}></Route>
      )
    }

  }
  componentWillMount() {
    this.props.authenticate();

  }
  render() {
    return (
      <div className="AuthGuard">
        {this.props.authState ? this.renderAuthRoutes() : null}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthGuard);
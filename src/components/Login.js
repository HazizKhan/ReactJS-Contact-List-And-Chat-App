import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { GridList, GridTile } from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import './Login.css';
import * as firebase from 'firebase';
import UserService from './../services/User'

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

class Login extends Component {
  constructor(props) {
    super(props)
    console.log(this.props);
    this.state = {
      emailField: '',
      passwordField: ''
    }
  }
  onChange(event, value, field) {
    console.log(field);
    this.setState(() => {
      switch (field) {
        case 'email':
          return { emailField: value }
          break
        case 'password':
          return { passwordField: value }
          break
      }
    })
    console.log(this.state);

  }
  authenticate() {
    this.setState({ isRequestPending: true })
    firebase.auth().signInWithEmailAndPassword(this.state.emailField, this.state.passwordField).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ...
    }).then((data) => {
      UserService.updateUid(data.uid);
      this.props.history.push('/home/contactList')

    });
  }

  styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      position: 'relative',
      marginTop: '50px'

    },

    textFields: {
      width: '100%'
    }
  }

  render() {
    return (
      <div className="Login" style={this.styles.root}>

        <Card>
          <CardTitle title="Login" subtitle="Please Login to continue" />
          <CardText>
            <TextField
              hintText="Enter Your Email"
              floatingLabelText="Email"
              type='email'
              style={this.styles.textFields}
              onChange={(event, newValue) => {
                this.onChange(event, newValue, 'email');
              }}
            />
            <TextField
              hintText="Enter Your Password"
              floatingLabelText="Password"
              type='password'
              style={this.styles.textFields}
              onChange={(event, newValue) => {
                this.onChange(event, newValue, 'password');
              }}

            />
            <div className="text-right full-width">
              <RaisedButton label='Login' primary={true} onClick={this.authenticate.bind(this)} />
            </div>
          </CardText>

        </Card>

      </div>
    );
  }
}

export default Login;

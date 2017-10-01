import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { GridList, GridTile } from 'material-ui/GridList';
import TextField from 'material-ui/TextField';
import './Login.css';
import * as firebase from 'firebase';
import UserService from './../services/User';
import { connect } from 'react-redux';
import AuthMiddleware from './../store/middleware/AuthMiddleware'

import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';

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

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phone: ''
    }

  }
  styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      position: 'relative',
      marginTop: '50px'

    }
  }
  onChange = (e, v, f) => {
    this.setState({ [f]: v });
  }
  addMobile = () => {
    console.log(this.props)
    console.log(this.state.phone)
  }


  render() {
    return (
      <div className="Login" style={this.styles.root}>

        <Card>
          <CardTitle title="Mobile" subtitle="Please add your mobile number to continue" />
          <CardText>
            <TextField
              hintText="Enter Your Mobile Number"
              floatingLabelText="Mobile Number"
              type='text'
              style={this.styles.textFields}
              onChange={(e, v) => { this.onChange(e, v, 'phone') }}
            />
            <div className="text-right full-width">
              <RaisedButton label='Add' primary={true} onClick={this.addMobile} />
            </div>
          </CardText>

        </Card>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

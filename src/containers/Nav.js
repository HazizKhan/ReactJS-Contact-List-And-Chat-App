import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import FontIcon from 'material-ui/FontIcon';


function mapStateToProps(state) {
  return {
    authState: state.AuthReducer,
  };
}



class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDropdown: false,
    };
  }
  styles = {
    title: {
      cursor: 'pointer',
    },
    color: {
      white: {
        color: 'white'
      }
    },
    margin: {
      mr2: { paddingRight: '2px' }
    }

  }
  show = (event) => {
    event.preventDefault();
    this.setState({
      openDropdown: true,
      anchorEl: event.currentTarget,
    });
  }
  hide = (event) => {
    this.setState({
      openDropdown: false,
    });
  }
  decideAuthenticatedView() {
    if (!this.props.authState.isAuthenticated && !this.props.authState.isPending) {
      return (
        <div>
          <Link to='/login'>
            <FlatButton label="Login" color={this.styles.color.white} />
          </Link>
          <Link to='/signup'>
            <FlatButton label="Signup" color={this.styles.color.white} />
          </Link>
        </div>
      )
    }
    if (this.props.authState.isAuthenticated) {
      return (
        <div>
          <FlatButton
            onClick={this.show}
            style={this.styles.color.white}
          >
            <span style={this.styles.margin.mr2}>
              {this.props.authState.payload.email}
            </span>
            <i className="fa fa-chevron-down" ></i>
          </FlatButton>
          <Popover
            open={this.state.openDropdown}
            anchorEl={this.state.anchorEl}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.hide}
          >
            <Menu>
              <MenuItem primaryText="Log Out" />
            </Menu>
          </Popover>
        </div>
      );
    }
  }
  render() {
    return (
      <AppBar
        title={<span style={this.styles.title}>Title</span>}
        iconElementLeft={<Icon isAuthenticated={this.props.authState.isAuthenticated} />}
        iconElementRight={
          this.decideAuthenticatedView()
        }
      />
    );
  }
}
class Icon extends Component {
  constructor(props) {
    super(props);
  }
  styles = {
    iconButton: {
      color: 'white'
    }
  }
  showMenuButton() {
    if (this.props.isAuthenticated) {
      return (
        <IconButton>
          <NavigationMenu color={this.styles.iconButton.color}></NavigationMenu>
          {/* <NavigationClose color={this.styles.iconButton.color} />  */}
        </IconButton>
      )
    }
    else {
      return null
    }
  }
  render() {
    return (
      this.showMenuButton()
    )
  }
}

export default connect(mapStateToProps)(Nav);
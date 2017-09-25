import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

class Nav extends Component {
  styles = {
    title: {
      cursor: 'pointer',
    },
    color: 'white'

  }
  render() {
    return (
      <AppBar
        title={<span style={this.styles.title}>Title</span>}
        iconElementLeft={<Icon />}
        iconElementRight={
          <div>
            <Link to='/login'>
              <FlatButton label="Login" color={this.styles.color} />
            </Link>
            <Link to='/signup'>
              <FlatButton label="Signup" color={this.styles.color} />
            </Link>
          </div>
        }
      />
    );
  }
}
class Icon extends Component {
  styles = {
    iconButton: {
      color: 'white'
    }
  }
  render() {
    return (
      <IconButton>
        <NavigationMenu color={this.styles.iconButton.color}></NavigationMenu>
        {/* <NavigationClose color={this.styles.iconButton.color} />  */}
      </IconButton>
    )
  }
}
export default Nav;

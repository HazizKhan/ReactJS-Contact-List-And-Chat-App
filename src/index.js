import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import * as firebase from 'firebase';
import { store } from './store'
import { Provider } from 'react-redux'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCZQtYTLNkoryia7hLihxbD8SQqpnmYq0M",
  authDomain: "marathon-c9a77.firebaseapp.com",
  databaseURL: "https://marathon-c9a77.firebaseio.com",
  projectId: "marathon-c9a77",
  storageBucket: "marathon-c9a77.appspot.com",
  messagingSenderId: "530095527298"
};
firebase.initializeApp(config);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={App}></Route>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

import * as firebase from 'firebase';
import { AuthenticationSuccessAction, AuthenticationFailureAction, AuthenticationAction } from '../actions/AuthActions'

class AuthMiddleware {
  static isAuthenticated() {
    return (dispatch) => {
      dispatch(new AuthenticationAction())
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          dispatch(new AuthenticationSuccessAction(user));
          return;
        }
        dispatch(new AuthenticationFailureAction());

      });
    }
  }
}

export default AuthMiddleware;
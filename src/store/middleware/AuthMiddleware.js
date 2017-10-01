import * as firebase from 'firebase';
import { AuthenticationSuccessAction, AuthenticationFailureAction, AuthenticationAction, NewUserAuthenticationSuccessAction } from '../actions/AuthActions'

class AuthMiddleware {
  static isAuthenticated() {
    return (dispatch) => {
      dispatch(new AuthenticationAction())
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          AuthMiddleware.getCurrentUser(user, dispatch);
          return;
        }
        dispatch(new AuthenticationFailureAction());

      });
    }
  }
  static getCurrentUser(user, dispatch) {
    firebase.database().ref('/users/' + user.uid).on('value', (snap) => {

      console.log(snap.val());
      if (snap.val()) {

        dispatch(new AuthenticationSuccessAction(snap.val()));
        return;
      }
      console.log("user", user)
      dispatch(new NewUserAuthenticationSuccessAction(user))
    })
  }
}

export default AuthMiddleware;
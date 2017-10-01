import { AUTHENTICATION, AUTHENTICATION_SUCCESS, AUTHENTICATION_FAILURE, NEW_USER_AUTHENTICATION_SUCCESS } from './../actions/AuthActions';

export default function AuthReducer(state = {}, action) {
  console.log(state, action);
  switch (action.type) {

    case AUTHENTICATION: {
      return { ...state, isAuthenticated: false, isPending: true, isError: false }
    }
    case AUTHENTICATION_SUCCESS: {
      return { payload: { email: action.payload.email, uid: action.payload.uid }, isAuthenticated: true, isPending: false, isError: false }
    }
    case NEW_USER_AUTHENTICATION_SUCCESS: {
      return { payload: { email: action.payload.email, uid: action.payload.uid }, isNewUser: true, isAuthenticated: false, isPending: false, isError: false }
    }
    case AUTHENTICATION_FAILURE: {
      return { ...state, isAuthenticated: false, isPending: false, isError: true }
    }
    default: {
      return { ...state, isAuthenticated: false, isPending: false, isError: false }
    }
  }
}
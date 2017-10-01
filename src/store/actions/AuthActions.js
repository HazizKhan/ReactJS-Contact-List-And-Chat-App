export const AUTHENTICATION = 'Authentication/Request';
export const AUTHENTICATION_SUCCESS = 'Authentication/Success';
export const NEW_USER_AUTHENTICATION_SUCCESS = 'New/User/Authentication/Success';
export const AUTHENTICATION_FAILURE = 'Authentication/Failure';

export function AuthenticationAction() {
  return {
    type: AUTHENTICATION
  }
}

export function AuthenticationSuccessAction(payload) {
  return {

    type: AUTHENTICATION_SUCCESS,
    payload
  }

}
export function NewUserAuthenticationSuccessAction(payload) {
  console.log("actions", payload)
  return {
    type: NEW_USER_AUTHENTICATION_SUCCESS,
    payload
  }

}
export function AuthenticationFailureAction(payload) {
  return {

    type: AUTHENTICATION_FAILURE,
    payload
  }

}

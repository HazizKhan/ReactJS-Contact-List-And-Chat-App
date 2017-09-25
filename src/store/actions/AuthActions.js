export const AUTHENTICATION = 'Authentication/Request';
export const AUTHENTICATION_SUCCESS = 'Authentication/Success';
export const AUTHENTICATION_FAILURE = 'Authentication/Failure';

export function AuthenticationAction() {
  return {
    type: AUTHENTICATION
  }
}

export function AuthenticationSuccessAction(payload) {
  return {

    type: AUTHENTICATION_SUCCESS,
    payload: payload
  }

}
export function AuthenticationFailureAction(payload) {
  return {

    type: AUTHENTICATION_FAILURE,
    payload: payload
  }

}

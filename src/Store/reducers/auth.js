import * as actionTypes from '../actions/actionTypes'
import utilityObject from '../../Hoc/Utility/utility'


const initialState = {
    token: null,
    userId: null,
    path: '/',
    errorMessage: null,
    loading: false
}
const authStart = (state, action) =>{
return utilityObject(state, {
  loading: true,
    errorMessage: null,
});
}

const authSuccess = (state, action) => {
  return utilityObject(state, {
    token: action.token,
      userId: action.userId,
    loading: false,
      errorMessage: null,
  });
};

const authFailed = (state, action) => {
  return utilityObject(state, {
      errorMessage: action.errorMessage,
   loading: false,
  });
};

  const authLogout = (state, action) => {
      return utilityObject(state, {
        token: null,
        userId: null
      })
  }

const setRedirectPath = (state, action) => {
  return utilityObject(state, {
    path: action.path,
      errorMessage: null,
  });
}

export const authReducer = (state =  initialState, action) => {

    switch (action.type) {
      case actionTypes.AUTH_START:
        return authStart(state, action);
      case actionTypes.AUTH_SUCCESS:
        return authSuccess(state, action)
      case actionTypes.AUTH_FAILED:
        return authFailed(state, action)
      case actionTypes.SET_REDIRECT_PATH:
        return setRedirectPath(state, action)
      case actionTypes.AUTH_LOGOUT:
        return authLogout(state, action)
      default:
        return state;
    }
}
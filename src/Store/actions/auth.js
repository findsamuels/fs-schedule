import * as actionTypes from '../actions/actionTypes'
import axios from 'axios'



export const authStart = () => {
    return{
type: actionTypes.AUTH_START
    }
}

export const setRedirectPath = path => {
  return {
    type: actionTypes.SET_REDIRECT_PATH,
    path: path
  };
};

export const authSuccess = (token, userId) => {
    return {
type: actionTypes.AUTH_SUCCESS,
token: token,
userId: userId
    }
}

export const authFailed = (errorMessage) => {
    return {
type: actionTypes.AUTH_FAILED,
errorMessage: errorMessage
    }
}

export const logout = () => {

  localStorage.removeItem('token')
  localStorage.removeItem('expirationDate')
  localStorage.removeItem('userId')
  return {
    type: actionTypes.AUTH_LOGOUT
  }
}

export const startAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout())
    }, expirationTime * 1000)
  }
}

export const compareUsers = (savedEmail, savedPassword) => {
    return{
        
    }
}

export const auth = (email, password, shouldSignUp) => {
         return dispatch => {
           dispatch(authStart());

           const userAuthData = {
             email: email,
             password: password,
             returnSecureToken: true
           };
console.log(shouldSignUp)
           let url =
             "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCkdQVoNu0YuD8Wltx349hFr_HabtqVjsk";

           

           if (!shouldSignUp) {
             url =
               "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCkdQVoNu0YuD8Wltx349hFr_HabtqVjsk";
           }
           axios
             .post(url, userAuthData)
             .then(res => {
               const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000 );
               localStorage.setItem('token', res.data.idToken);
               localStorage.setItem('expirationDate', expirationDate);
               localStorage.setItem('userId', res.data.localId);
               dispatch(authSuccess(res.data.idToken, res.data.localId));
               dispatch(setRedirectPath())
               dispatch(startAuthTimeout(res.data.expiresIn));
               console.log(res.data);
               console.log(res);
             })
             .catch(err => {
               dispatch(authFailed(err.res));
                 console.log(err.res)
             });
         };
       };

       

      export const setAuthState = () => {
        return dispatch => {
          const savedToken = localStorage.getItem('token')
          

          if (!savedToken) {
            dispatch(logout())
          } else {
              const expirationDate = new Date(localStorage.getItem('expirationDate'))
              if (expirationDate <= new Date()) {
                  dispatch(logout())
              }
              else {
                  const userId = localStorage.getItem('userId')
                  dispatch(authSuccess(savedToken, userId))
                  dispatch(startAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
              }
            }
          
          
        }
      }


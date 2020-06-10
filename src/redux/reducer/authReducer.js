
import {authAPI} from '../../API/api.js';

const IS_AUTH_REQUEST = 'IS-AUTH-REQUEST';



let initialState = {
  authData: {
    id: null,
    email: null,
    login: null,
    isAuth: false
  },
}

const authReducer = (state=initialState,action) => {
  switch(action.type){
    case IS_AUTH_REQUEST:
      return {...state,authData:{...action.dataAuth}}
    default:
      return state
  }
}

export const authRequestData = (data) => ({type:IS_AUTH_REQUEST,dataAuth:data})

export const isAuthThunk = () => {
  return (dispatch) => {
    authAPI.isAuth().then(
      response => {
        if(response.resultCode === 0) {
          dispatch(authRequestData({...response.data, isAuth: true}));
        }
      }
    )
  }
}

export const login = (data) => (dispatch) => {
  authAPI.login({...data}).then(response => {
    if(response.resultCode === 0){
      dispatch(isAuthThunk())
    }
  })
}
export const logout = () => (dispatch) => {
  authAPI.logout().then(response => {
    if(response.resultCode === 0){
      dispatch(authRequestData({email: null, id: null, login: null, isAuth:false}))
    }
  })
}

export default authReducer;
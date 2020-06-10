import React from 'react';
import {LoginFormContainer} from './login.jsx';
import {login} from '../../../../redux/reducer/authReducer.js';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  const onSubmitForm = (loginData) => {
    props.login({email: undefined, password: undefined, rememberMe: false, ...loginData})
  }
  if(props.isAuth){
    return <Redirect to={'/profile'}/>
  }
  return <>
    <h1>Войдите в свой аккаунт</h1>
    <LoginFormContainer onSubmit={onSubmitForm}/>
  </>
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.authData.isAuth
})

export const LoginContainer = connect(mapStateToProps, {login})(Login)




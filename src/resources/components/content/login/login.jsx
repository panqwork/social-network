import React from 'react';

import s from './style.module.css';
import Button from '../../generic/button/button';
import { Field, reduxForm } from 'redux-form';


const LoginForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
      <Field component={'input'} name={'email'} type="email" placeholder='Логин'/>
      <Field component={'input'} name={'password'} type="password" placeholder='Пароль'/>
      <label htmlFor="rememberLogin">
        Запомнить меня
        <Field component={'input'} name={'rememberMe'} type="checkbox" id="rememberLogin"/>
      </label>
      <Button>Войти</Button>
    </form>
  )
}

export const LoginFormContainer = reduxForm({
  form: 'login'
})(LoginForm)


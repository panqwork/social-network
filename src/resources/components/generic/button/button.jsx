import React from 'react';
import s from './button-style.module.css';

const Button = (props) => {
  return <button onClick={props.clickEvent} className={s.primary}>{props.children}</button>
}

export default Button;
import React from 'react';

// styles import
import s from './button-style.module.css';

const Button = (props) => {
  return <button disabled={props.disabled} onClick={props.clickEvent} className={s.primary}>{props.children}</button>
}

export default Button;
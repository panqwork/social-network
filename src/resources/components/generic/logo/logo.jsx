import React from 'react';
import {Link} from 'react-router-dom'
import s from './logo.module.css';

const Logo = () => {
  return(
    <Link className={s.logo} to="/">Социальная сетка</Link>
  )
}

export default Logo;
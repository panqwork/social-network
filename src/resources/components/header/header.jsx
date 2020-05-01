import React from 'react';
import style from './header-style.module.css';
import {Link} from 'react-router-dom'

export const Header = () => {
  return(
    <header>
      <div className="container">
        <Link className={style.logo} to="/">Социальная сетка</Link>
      </div>
    </header>
  )
}
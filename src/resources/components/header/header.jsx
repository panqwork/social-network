import React from 'react';
import style from './header-style.module.css';
import {BrowserRouter,Link} from 'react-router-dom'

export const Header = () => {
  return(
    <BrowserRouter>
      <header>
        <div className="container">
          <Link className={style.logo} to="/">Социальная сетка</Link>
        </div>
      </header>
    </BrowserRouter>
  )
}
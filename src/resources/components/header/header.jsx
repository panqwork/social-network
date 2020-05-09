import React from 'react';
import s from './header-style.module.css'

//components
import Logo from '../generic/logo/logo'

export const Header = () => {
  return(
    <header className={s.header}>
      <div className="container">
        <Logo/>
      </div>
    </header>
  )
}
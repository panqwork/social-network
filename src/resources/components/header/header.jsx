import React from 'react';
import s from './header-style.module.css'

//components
import Logo from '../generic/logo/logo'

export const Header = () => {
  return(
    <header>
      <div className="container">
        <Logo/>
      </div>
    </header>
  )
}
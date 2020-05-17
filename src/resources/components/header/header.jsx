import React from 'react';

// styles import
import s from './header-style.module.css';

//components import
import Logo from '../generic/logo/logo.jsx';

const Header = () => {
  return(
    <div className={s.header}>
      <div className="container">
        <Logo/>
      </div>
    </div>
  )
}

export default Header;
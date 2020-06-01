import React from 'react';

// styles import
import s from './header-style.module.css';

//components import
import Logo from '../generic/logo/logo.jsx';

const Header = (props) => {
  return(
    <div className={s.header}>
      <div className={[s.header_container, "container"].join(' ')}>
        <Logo/>
        <div className={s.userTools}>
          <div className={s.user}>
            {props.authData.isAuth? props.authData.login: 'Войти'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
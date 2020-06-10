import React from 'react';

// styles import
import s from './header-style.module.css';

//components import
import Logo from '../generic/logo/logo.jsx';
import { NavLink, Redirect } from 'react-router-dom';

const Header = (props) => {
  return(
    <div className={s.header}>
      <div className={[s.header_container, "container"].join(' ')}>
        <Logo/>
        <div className={s.userTools}>
          <div className={s.user}>
            {props.authData.isAuth ? 
              <div>
                {props.authData.login}
                <span onClick={()=>{props.logout()}}>Выйти</span>
              </div> : 
              <NavLink className={s.login} to='login'>Войти</NavLink>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
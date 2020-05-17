import React from 'react';

import {Link} from 'react-router-dom';

// styles import
import s from './navbar-style.module.css';

const Navbar = () => {
  return(
    <div className={s.nav}>
      <ul>
        <li>
          <Link to='/profile'>Моя страница</Link>
        </li>
        <li>
          <Link to='/messages'>Сообщения</Link>
        </li>
        <li>
          <Link to='/users'>Пользователи</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;
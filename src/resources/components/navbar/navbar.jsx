import React from 'react';
import './navbar-style.module.css'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return(
    <nav>
      <ul>
        <li>
          <Link to="/profile">Моя страница</Link>
        </li>
        <li>
          <Link to="/messages">Сообщения</Link>
        </li>
      </ul>
    </nav>
  )
}
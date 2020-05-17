import React from 'react';

// styles import
import s from './avatar-style.module.css';

//photos import
import DefaultPhoto from '../../assets/photos/default_avatar.png'

const Avatar = (props) => {
  switch (props.type) {
    case 'post':
      return (
        <img className={s.post} src={props.src !== null?DefaultPhoto:props.src} alt="" />
      )
    case 'dialog':
      return (
        <img className={s.dialog} src={props.src !== null?DefaultPhoto:props.src} alt="" />
      )
    case 'message':
      return (
        <img className={s.message} src={props.src !== null?DefaultPhoto:props.src} alt="" />
      )
    case 'list':
      return(
        <img className={s.list} src={props.src !== null?DefaultPhoto:props.src} alt="" />
      )
    default:
      return (
        <img className={s.main} src={props.src !== null?DefaultPhoto:props.src} alt="" />
      )
  }
}

export default Avatar;
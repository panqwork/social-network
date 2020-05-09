import React from 'react';
import {Switch, Route} from 'react-router-dom';
import style from './content-style.module.css'

// components
import Profile from './profile/profile';
import Dialogs from './dialogs/dialogs';


export const Content = () => {
  return(
    <div className={style.content}>
      <Switch>
        <Route path="/profile" render={() => <Profile/>}/>
        <Route path="/messages" render={() => <Dialogs/>}/>
      </Switch>
    </div>
  )
}
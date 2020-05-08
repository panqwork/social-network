import React from 'react';
import {Switch, Route} from 'react-router-dom';
import style from './content-style.module.css'

// components
import Profile from './profile/profile';
import Dialogs from './dialogs/dialogs';


export const Content = (props) => {
  return(
    <div className={style.content}>
      <Switch>
        <Route path="/profile" render={() => <Profile dispatch={props.dispatch} userProfile={props.state.userProfile}/>}/>
        <Route path="/messages" render={() => <Dialogs userMessages={props.state.userMessages} dispatch={props.dispatch}/>}/>
      </Switch>
    </div>
  )
}
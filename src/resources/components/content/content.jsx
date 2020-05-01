import React from 'react';
import {Switch, Route} from 'react-router-dom';
import style from './content-style.module.css'

// components
import Profile from './profile/profile';


export const Content = (props) => {
  return(
    <div className={style.content}>
      <Switch>
        <Route exact path="/profile" render={() => <Profile dispatch={props.dispatch} inputTextarea={props.inputTextarea} userProfile={props.state.userProfile}/>}/>
        <Route exact path="/messages" render={() => "asdsadadwdqw"}/>
      </Switch>
    </div>
      
  )
}
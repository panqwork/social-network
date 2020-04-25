import React from 'react';
import {Switch, Route} from 'react-router-dom';
import style from './content-style.module.css'

export const Content = () => {
  return(
    <div className={style.content}>
      <Switch>
        <Route exact path="/" render={() => "112312"}/>
        <Route exact path="/messages" render={() => "asdsadadwdqw"}/>
      </Switch>
    </div>
      
  )
}
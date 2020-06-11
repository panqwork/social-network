import './styles/reset.css'
import './styles/main.css';

import React from 'react';


import {BrowserRouter} from 'react-router-dom';

import {appInit} from '../redux/reducer/appReducer.js';

// component import
import Content from './components/content/content.jsx';
import HeaderContainer from './components/header/header_container.jsx';
import Navbar from './components/navbar/navbar.jsx';

// font-awesome import
import { library } from '@fortawesome/fontawesome-svg-core';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Preloader from './components/generic/preloader/preloader';
library.add(faAngleUp)

class App extends React.Component {

  componentDidMount() {
    this.props.appInit()
  }

  render() {
    const {props} = this;

    if(!props.isInit) {
      return <Preloader/>
    }
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderContainer/>
          <div className="container">
            <Navbar />
            <Content store={props.store} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  isInit: state.app.isInit
})

export const AppContainer = connect(mapStateToProps, {appInit})(App);

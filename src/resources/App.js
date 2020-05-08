import './styles/reset.css'
import './styles/main.css';
import React from 'react';
import {Header} from './components/header/header';
import {Navbar} from './components/navbar/navbar';
import {Content} from './components/content/content';
import {BrowserRouter} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
library.add(faAngleUp)

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="container">
          <Navbar />
          <Content dispatch={props.dispatch} state={props.state} />
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

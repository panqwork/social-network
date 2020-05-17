import './styles/reset.css'
import './styles/main.css';

import React from 'react';


import {BrowserRouter} from 'react-router-dom';

// component import
import Content from './components/content/content.jsx';
import Header from './components/header/header.jsx';
import Navbar from './components/navbar/navbar.jsx';

// font-awesome import
import { library } from '@fortawesome/fontawesome-svg-core';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
library.add(faAngleUp)

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="container">
          <Navbar />
          <Content store={props.store} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

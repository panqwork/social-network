import './styles/reset.css'
import './styles/main.css';
import React from 'react';
import {Header} from './components/header/header';
import {Navbar} from './components/navbar/navbar';
import {Content} from './components/content/content';
import {BrowserRouter} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import {faCheckSquare,faAddressCard} from '@fortawesome/free-solid-svg-icons';
library.add(faCheckSquare,faAddressCard)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div className="container">
          <Navbar />
          <Content/>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;

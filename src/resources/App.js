import './styles/reset.css'
import './styles/main.css';
import React from 'react';
import {Header} from './components/header/header';
import {Navbar} from './components/navbar/navbar';
import {Content} from './components/content/content';
import {BrowserRouter} from 'react-router-dom'


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

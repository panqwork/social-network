import React from 'react';
import ReactDOM from 'react-dom';
import App from './resources/App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'
import StoreContext from './contextAPI/store_context';

let renderTree = ()=>{
  ReactDOM.render(
      <StoreContext.Provider value={store}>
        <App/>
      </StoreContext.Provider>,document.getElementById('root')
  )}

renderTree();

store.subscribe(renderTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

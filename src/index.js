import React from 'react';
import ReactDOM from 'react-dom';
import App from './resources/App';
import * as serviceWorker from './serviceWorker';

import store from './redux/redux-store'

let renderTree = (store)=>{ReactDOM.render(<App store={store} />,document.getElementById('root'));}

renderTree(store);

store.subscribe(()=>{
  renderTree(store)
});



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

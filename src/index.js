import React from 'react';
import ReactDOM from 'react-dom';
import App from './resources/App';
import * as serviceWorker from './serviceWorker';

import store from './redux/store'

let renderTree = ()=>{ReactDOM.render(<App dispatch={store.dispath.bind(store)} state={store.getState()} />,document.getElementById('root'));}

renderTree();

store.subscribe(renderTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

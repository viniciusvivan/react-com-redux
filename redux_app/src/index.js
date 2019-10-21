import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from "./store";
import { Provider } from 'react-redux'; //Conecta a aplicação react com a store

/*
 * Com os imports acima dizemos, "Pegue o primeiro componente e conecte a store"
 * É necessário colocar a aplicação inicial dentro do Provider e passar a store
 * parao mesmo.
 */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

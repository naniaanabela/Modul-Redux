import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import MainReducer from './reducers/MainReducer' 
import App from './App';
import registerServiceWorker from './registerServiceWorker'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = compose(window.devToolsExtension ? window.devToolsExtension() : f => 
f)(createStore)(MainReducer)


ReactDOM.render(<Provider store={store}> 
<App /> 
</Provider> , 
document.getElementById('root')); 
registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

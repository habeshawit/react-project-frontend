import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import categoryReducer from './reducers/categoryReducer'

import store from './redux/store'

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//comment back
// let store = createStore(categoryReducer, composeEnhancer(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>  
  </Provider>
  , document.getElementById('root')
);


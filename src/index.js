import React from 'react';
import ReactDOM from 'react-dom';
import {compose} from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import store from './redux/store'
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>  
  </Provider>
  , document.getElementById('root')
);


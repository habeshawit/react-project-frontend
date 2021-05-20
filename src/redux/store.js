import {createStore, combineReducers, compose, applyMiddleware, } from 'redux'
import itemReducer from './reducer/itemReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    items: itemReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeEnhancer(applyMiddleware(thunk))
)

export default store;
import {createStore, combineReducers, compose, applyMiddleware, } from 'redux'
import itemReducer from './reducer/itemReducer'
import categoryReducer from './reducer/categoryReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    items: itemReducer,
    categories: categoryReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer, 
    composeEnhancer(applyMiddleware(thunk))
)

export default store;
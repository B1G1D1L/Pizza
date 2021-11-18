import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { filtersReducer } from './reducers/filters';
import { pizzasReducer } from './reducers/pizzas';

const rootReducers = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
})

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);

export default store;

window.store = store; 
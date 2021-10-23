import { combineReducers, compose, createStore } from 'redux';
import { filtersReducer } from './reducers/filters';
import { pizzasReducer } from './reducers/pizzas';

const rootReducers = combineReducers({
  filters: filtersReducer,
  pizzas: pizzasReducer,
})

const store = createStore(
  rootReducers,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;

window.store = store; 
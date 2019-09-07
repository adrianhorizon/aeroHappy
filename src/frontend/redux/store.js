import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import countryReducer from './reducers/countryReducer';

const reducers = combineReducers({
  countryReducer,
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ }) : compose;

const preloadedState = typeof window === 'object' && window.__PRELOADED_STATE__;
const middleware = [thunk];
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

const store = createStore(reducers, preloadedState, enhancer);

export default store;

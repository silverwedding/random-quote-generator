import { createStore, compose } from 'redux';
import { defaultState, quotesReducer } from './reducers';

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(quotesReducer, defaultState, enhancers);

/*
store.subscribe(() =>
  console.log(store.getState())
);
*/

export default store;
import { createStore, compose } from 'redux';
import quotesReducer from './reducers/quotes';
import { makeQuote, setBackground } from './functions';
import { quotes, colors } from './data/quotes';

// create an object for the default data
export const defaultState = {
	quote: makeQuote(quotes),
	backgroundColor: {backgroundColor: setBackground(colors)}
}

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(quotesReducer, defaultState, enhancers);

/*
store.subscribe(() =>
  console.log(store.getState())
);
*/

export default store;
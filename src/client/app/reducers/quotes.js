import * as actions from '../actions/types';
import { makeQuote, setBackground } from '../functions/index';
import { colors, quotes } from '../data/quotes';

// create an object for the default data
export const defaultState = {
  quote: makeQuote(quotes),
  backgroundColor: {backgroundColor: setBackground(colors)}
};

const quotesReducer = (state = defaultState, action) => {
  switch (action.type) {
  case actions.NEW_QUOTE:
    return {
      quote: action.quote,
      backgroundColor: {backgroundColor: action.backgroundColor}
    };
  default:
    return state;
  }
};

export default quotesReducer;
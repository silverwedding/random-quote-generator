import * as actions from '../actions/types';
import { makeQuote, setBackground } from '../functions/index';
import { colors, quotes } from '../data/quotes';

// create an object for the default data
export const defaultState = {
  quote: makeQuote(quotes),
  backgroundColor: setBackground(colors)
};

export const quotesReducer = (state = defaultState, action) => {
  switch (action.type) {
  case actions.NEW_QUOTE:
    return {
      backgroundColor: action.payload.backgroundColor,
      quote: action.payload.quote
    };
  default:
    return state;
  }
};

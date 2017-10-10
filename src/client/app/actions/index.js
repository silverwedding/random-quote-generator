import * as actions from './types';

export const newQuote = (quote, color) => (
  {
    type: actions.NEW_QUOTE,
    quote: quote,
    backgroundColor: color
  }
);
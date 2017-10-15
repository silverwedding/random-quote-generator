import * as actions from '../actions/types';

// create an object for the default data
export const defaultState = {
  quote: { quote: '', speaker: '' },
  backgroundColor: 'white'
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

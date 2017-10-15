import * as actions from '../../actions';
import * as types from '../types';

describe('Quote actions', () => {
  describe('New Quote', () => {
    it('should create an action to change the quote', () => {
      const quote = { quote: 'test', speaker: 'test speaker' };
      const color = 'blue';
      const expectedAction = {
        type: types.NEW_QUOTE,
        payload: {
          quote: quote,
          backgroundColor: color
        }
      };
      expect(actions.newQuote(quote, color)).toEqual(expectedAction);
    });
  });
})

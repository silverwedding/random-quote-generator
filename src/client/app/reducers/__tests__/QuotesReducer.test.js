import { defaultState, quotesReducer } from '../../reducers';
import * as actions from '../../actions/types';

describe('Default State', () => {
  it('returns quote and background colour', () => {
    expect(defaultState).toEqual(expect.objectContaining({
      quote: {
        quote: expect.any(String),
        speaker: expect.any(String)
      },
      backgroundColor: expect.any(String)
    }));
  });
});

describe('Reducer', () => {
  it('should return the initial state', () => {
    expect(quotesReducer(undefined, {})).toEqual(
      {
        quote: { quote: '', speaker: '' },
        backgroundColor: 'white'
      }
    );
  });

  it('should handle NEW_QUOTE', () => {
    expect(
      quotesReducer({}, {
        type: actions.NEW_QUOTE,
        payload: {
          quote: { quote: 'test', speaker: 'test' },
          backgroundColor: 'blue'
        }
      })
    ).toEqual(
      {
        quote: { quote: 'test', speaker: 'test' },
        backgroundColor: 'blue'
      }
    );
  });
});
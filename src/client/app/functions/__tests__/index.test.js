import { makeQuote, setBackground } from '../../functions';
import { quotes, colors } from '../../data/quotes';

describe('makeQuote', () => {
  it('returns quote', () => {
    expect(makeQuote(quotes)).toEqual(expect.objectContaining({
      quote: expect.any(String),
      speaker: expect.any(String)
    }));
  });
});

describe('setBackground', () => {
  it('returns color', () => {
    expect(setBackground(colors)).toEqual(expect.any(String));
  });
});
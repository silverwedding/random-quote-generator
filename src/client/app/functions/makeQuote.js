export const makeQuote = (quotes) => {
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  quote = quote.split('@');
  return {quote: quote[0], speaker: quote[1]};
};
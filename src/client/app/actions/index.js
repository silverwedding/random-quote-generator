const NEW_QUOTE = 'NEW_QUOTE';

export const newQuote = (quote, color) => (
	{
		type: NEW_QUOTE,
		quote: quote,
		backgroundColor: color
	}
);
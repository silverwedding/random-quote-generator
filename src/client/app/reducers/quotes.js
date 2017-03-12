const NEW_QUOTE = 'NEW_QUOTE';

const quotesReducer = (state = defaultState, action) => {
  	switch (action.type) {
	  	case NEW_QUOTE: 
	    	return {
	    		quote: action.quote,
	    		backgroundColor: {backgroundColor: action.backgroundColor}
	    	}
	  	default:
	    	return state
  	}
};

export default quotesReducer;
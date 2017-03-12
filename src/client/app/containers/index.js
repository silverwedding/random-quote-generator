import { connect } from 'react-redux';
import App from '../components/App';
import { newQuote } from '../actions/';
import { makeQuote, setBackground } from '../functions';
import { quotes, colors } from '../data/quotes'

const mapStateToProps = (state) => {
  	return {
  		quote: state.quote,
  		backgroundColor: state.backgroundColor
  	}
};

const mapDispatchToProps = (dispatch) => {
  return {
  	submitNewQuote: () => {
  		dispatch(newQuote(makeQuote(quotes), setBackground(colors)));
  	}
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

export default Container;
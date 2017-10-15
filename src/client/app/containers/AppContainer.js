import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import { newQuote } from '../actions';
import { makeQuote, setBackground } from '../functions';
import { quotes, colors } from '../data/quotes';

export class AppContainer extends Component {
  constructor (props) {
    super(props);

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  componentWillMount () {
    this.getNewQuote();
  }

  getNewQuote () {
    const { newQuote } = this.props;
    newQuote(makeQuote(quotes), setBackground(colors));
  }

  render () {
    const { quote, backgroundColor } = this.props;

    return (
      <App
        quote={quote}
        backgroundColor={backgroundColor}
        getNewQuote={this.getNewQuote}
      />
    );
  }
}

const mapStateToProps = (
  { quote, backgroundColor }
) => (
  { quote, backgroundColor }
);
const Container = connect(mapStateToProps, { newQuote })(AppContainer);
export default Container;
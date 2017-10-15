import React from 'react';

const App = ({ quote, backgroundColor, getNewQuote }) => (
  <div style={{backgroundColor: backgroundColor}}>
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="text-center">Random Quote Generator</h1>
          <h2 className="text-center">Quotes are so inspiring...</h2>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-xs-12">
          <div className="text-center quote-box" >
            <div className="quote">
              <h3 className="text-left">
                <i className="fa fa-quote-left fa-2x"/>
              </h3>
              <p className="quote-content">{quote.quote}</p>
              <h3 className="text-right">
                <i className="fa fa-quote-right fa-2x"/>
              </h3>
            </div>
            <p className="author">{quote.speaker}</p>
          </div>
          <hr />
          <button id="getQuote" className="btn btn-default" onClick={getNewQuote} >
            Get Quote
          </button>
          <a
            className="btn btn-primary"
            id="twitter"
            href={'https://twitter.com/intent/tweet?text=' + quote.quote}
            target="_blank"
          >
            <i className="fa fa-twitter"/> Tweet
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default App;

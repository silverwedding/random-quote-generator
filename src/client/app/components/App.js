import React from 'react'

const App = (props) => (
	<div style={props.backgroundColor}>
		<div className="container">
		  <div className="row">
		    <div className="col-xs-12">
		      <h1 className="text-center">Random Quote Generetor</h1>
		      <h2 className="text-center">Quotes are so inspiring...</h2>      
		    </div>    
		  </div>
		  <hr />
		  <div className="row">
		    <div className="col-xs-12">
		      <div className="text-center quote-box"  >
		        <div className="quote">
		        	<h3 className="text-left">
		        		<i className="fa fa-quote-left fa-2x"></i> 
		        	</h3>
		        	<p>{props.quote.quote}</p>
		        	<h3 className="text-right">
		        		<i className="fa fa-quote-right fa-2x"></i> 
		        	</h3>	        	
		        </div>
		        <p className="author">{props.quote.speaker}</p>
		      </div>
		      <hr />
		      <button id="getQuote" className="btn btn-default" onClick={props.submitNewQuote} >
		        Get Quote
		      </button>
		      <a 
		      	className="btn btn-primary" 
		      	id="twitter" 
		      	href={"https://twitter.com/intent/tweet?text=" + props.quote.quote} 
		      	target="_blank"
		      	> 
		      	<i className="fa fa-twitter"></i> Tweet
			  </a>
		    </div>
		  </div>
		</div>
	</div>
);

export default App;
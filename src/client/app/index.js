import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Container from './containers'
import store from './store'

const AppWrapper = () => (
	<Provider store={store}>
		<Container/>
	</Provider>
);

ReactDOM.render(<AppWrapper />, document.getElementById('app'));





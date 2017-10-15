import React from 'react';
import { shallow } from 'enzyme';
import ConnectedAppContainer, { AppContainer } from '../AppContainer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('App Container', () => {
  describe('Connected Component', () => {
    const mockStore = configureStore([]);
    const initialState = {};
    const store = mockStore(initialState);
    const connectedAppContainer = shallow(
      <Provider store={store}>
        <ConnectedAppContainer />
      </Provider>
    );

    it('renders properly', () => {
      expect(connectedAppContainer).toMatchSnapshot();
    });
  });

  describe('Component', () => {
    const newQuote = jest.fn();
    const appContainer = shallow(<AppContainer newQuote={newQuote} />);

    it('renders properly', () => {
      expect(appContainer).toMatchSnapshot();
    });

    it('has App component', () => {
      const app = appContainer.find('App');
      expect(app.exists()).toBe(true);
    });
  });
});
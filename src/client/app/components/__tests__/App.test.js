import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App', () => {
  const getNewQuote = jest.fn();

  const props = {
    quote: { quote: 'test', speaker: 'test' },
    backgroundColor: 'blue',
    getNewQuote
  };
  const app = shallow(<App {...props} />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  it('shows initial quote', () => {
    expect(app.find('.quote-content').text()).toContain('test');
  });

  it('shows initial speaker', () => {
    expect(app.find('.author').text()).toContain('test');
  });

  it('has background colour set from initial props', () => {
    expect(app.get(0).props.style).toHaveProperty('backgroundColor', 'blue');
  });

  describe('New quote button', () => {
    beforeEach(() => {
      app.find('#getQuote')
        .simulate('click');
    });

    it('calls new quote function', () => {
      expect(getNewQuote).toHaveBeenCalled();
    });
  });
});
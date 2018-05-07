import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from '../index';
import reducer from '../../../reducers';

describe('App', () => {
  const store = createStore(reducer);

  it('should render without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div,
    );
  });
  it('should match snapshot', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';

import { store } from './store';
import { App } from './components';

describe('Application start', () => {
  test('should render the application', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const app = container.querySelector('.app');
    expect(app).toBeInTheDocument();
  });
});

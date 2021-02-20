import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../../store'

import Routes from './Routes'

describe('Routes Component', () => {
  test('should render the component', () => {
    const { container } = render(
      <Provider store={store}>
        <Routes />
      </Provider>
    )

    const element = container.querySelector('.app-routes')
    expect(element).toBeInTheDocument()
  })
})

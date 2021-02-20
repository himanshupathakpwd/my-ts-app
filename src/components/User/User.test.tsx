import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import { store, userActions } from '../../store'

import User from './User'

describe('User Component', () => {
  test('should render the component', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <User />
        </MemoryRouter>
      </Provider>
    )
    const element = container.querySelector('.user')
    expect(element).toBeInTheDocument()
  })

  test('should render the component without login state', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <User />
        </MemoryRouter>
      </Provider>
    )
    const loginLink = container.querySelector('a.login-link')
    expect(loginLink).toBeInTheDocument()
  })

  test('should render the component with logged in state', async () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <User />
        </MemoryRouter>
      </Provider>
    )
    await store.dispatch(
      userActions.userLoginAction({
        username: 'username',
        password: 'password'
      })
    )
    const loginLink = container.querySelector('a.login-link')
    expect(loginLink).not.toBeInTheDocument()
    // @todo: Check the dashboard component to be rendered
  })
})

import React from 'react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { render, fireEvent, cleanup } from '@testing-library/react'

import Dashboard from './Dashboard'
import { store, userActions } from '../../../store'

describe('Dashboard Component', () => {
  afterEach(cleanup)

  test('should render the component', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    )
    const element = container.querySelector('.dashboard')
    expect(element).toBeInTheDocument()
  })

  // @todo: Test for redirect to login

  test('should render the component with logged in state', async () => {
    await store.dispatch(
      userActions.userLoginAction({
        username: 'username',
        password: 'password'
      })
    )
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    )
    const element = container.querySelector('h3')
    expect(element).toHaveTextContent('User Dashboard')
  })

  test('should render and click on logout button', async () => {
    await store.dispatch(
      userActions.userLoginAction({
        username: 'username',
        password: 'password'
      })
    )
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </Provider>
    )
    const logoutButton = container.querySelector('.button-logout')
    expect(logoutButton).toBeInTheDocument()
    if (logoutButton) {
      fireEvent.click(logoutButton)
      // await userEvent.click(logoutButton);
    }
  })
})

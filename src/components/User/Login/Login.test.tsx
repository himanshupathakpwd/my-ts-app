import React from 'react'
import { render, act, fireEvent, cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'

import Login from './Login'
import { store } from '../../../store'

describe('Login Component', () => {
  beforeEach(() => {})
  afterEach(cleanup)

  test('should render the component', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    )
    const loginComponent = container.querySelector('.login')
    expect(loginComponent).toBeInTheDocument()
  })

  test('should render the form and components', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    )
    const loginForm = container.querySelector('form[name="loginForm"]')
    const usernameField = container?.querySelector('input[name="username"]')
    const passwordField = container?.querySelector('input[name="password"]')
    const loginButton = container?.querySelector('button[name="loginButton"]')

    expect(loginForm).toBeInTheDocument()
    expect(usernameField).toBeInTheDocument()
    expect(passwordField).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
    expect(loginButton).toHaveTextContent('Login')
  })

  test('should change the username field', async () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    )
    const usernameField: HTMLInputElement | null = container?.querySelector(
      'input[name="username"]'
    )
    const value = 'himanshu'
    expect(usernameField).toHaveValue('')
    if (usernameField) {
      await act(async () => {
        fireEvent.change(usernameField, {
          target: { value }
        })
      })
    }
    expect(usernameField).toHaveValue(value)
  })

  test('should change the password field', async () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    )
    const passwordField: HTMLInputElement | null = container?.querySelector(
      'input[name="password"]'
    )
    const value = 'demo-password'
    expect(passwordField).toHaveValue('')
    if (passwordField) {
      await act(async () => {
        fireEvent.change(passwordField, {
          target: { value }
        })
      })
    }
    expect(passwordField).toHaveValue(value)
  })

  test('should submit the form', async () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      </Provider>
    )
    const usernameField: HTMLInputElement | null = container?.querySelector(
      'input[name="username"]'
    )
    const passwordField: HTMLInputElement | null = container?.querySelector(
      'input[name="password"]'
    )
    const loginButton = container?.querySelector('button[name="loginButton"]')
    if (usernameField) {
      await userEvent.type(usernameField, 'demo-username')
    }
    if (passwordField) {
      await userEvent.type(passwordField, 'demo-password')
    }
    if (loginButton) {
      await userEvent.click(loginButton)
    }
  })
})

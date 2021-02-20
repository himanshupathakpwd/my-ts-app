import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

describe('App Component', () => {
  test('should render the component', () => {
    const { container } = render(<App />)
    const app = container.querySelector('.app')
    expect(app).toBeInTheDocument()
  })
})

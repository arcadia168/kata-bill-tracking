import React from 'react'
import { render } from '@testing-library/react'
import HomePage from './HomePage'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

describe('Home page', () => {
  it('Renders a title banner with title', () => {
      const { getByText } = render(
            <Router>
                <HomePage />
            </Router>
          )

      expect(getByText('Regular Payments')).toBeInTheDocument()
  })
})

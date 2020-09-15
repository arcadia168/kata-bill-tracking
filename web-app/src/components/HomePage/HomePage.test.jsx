import React from 'react'
import { render } from '@testing-library/react'
import HomePage from './HomePage'
import { Provider } from 'react-redux'
import store from '../../state/store'

describe('Home page', () => {
  it('Renders a title banner with title', () => {
      const { getByText } = render(
            <Provider store={store}>
                <HomePage />
            </Provider>
          )

      expect(getByText('Regular Payments')).toBeInTheDocument()
  })

  // test it renders list of payments

  // test it renders add button
})

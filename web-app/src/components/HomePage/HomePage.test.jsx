import React from 'react'
import { render } from '@testing-library/react'
import HomePage from './HomePage'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
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
})

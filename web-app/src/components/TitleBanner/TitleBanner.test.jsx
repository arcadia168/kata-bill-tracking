import React from 'react'
import { render } from '@testing-library/react'
import TitleBanner from './TitleBanner'

it('renders title text', () => {
  const { getByText } = render(
    <TitleBanner
        title={'Some Title'}
        subtitle={'Some subtitle'}
    />
  )

  expect(getByText('Some Title')).toBeInTheDocument()
  expect(getByText('Some subtitle')).toBeInTheDocument()
})

import React from 'react'
import { render } from '@testing-library/react'
import TitleBanner from './TitleBanner'

it('renders title text', () => {
  const { getByText } = render(
    <TitleBanner
        title={'Some Title'}
    />
  )

  expect(getByText('Some Title')).toBeInTheDocument()
})

import React from 'react'
import { render } from '@testing-library/react'
import AddPaymentPage from './AddPaymentPage';

describe('Add Payment Page', () => {
    it('Renders the name of the page', () => {
        const { getByText } = render(
            <AddPaymentPage />
        )

        expect(getByText('Add A Bill')).toBeInTheDocument()
    })

    it('Renders button to add new payment', () => {
        const { getByText } = render(
            <AddPaymentPage />
        )

        expect(getByText('Add new payment')).toBeInTheDocument()
    })
})

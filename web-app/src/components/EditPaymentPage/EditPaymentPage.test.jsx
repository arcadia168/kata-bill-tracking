import React from 'react'
import { render } from '@testing-library/react'
import AddPaymentPage from './EditPaymentPage';

describe('Edit Payment Page', () => {
    it('Renders the name of the page', () => {
        const { getByText } = render(
            <AddPaymentPage />
        )

        expect(getByText('Edit A Bill')).toBeInTheDocument()
    })

    //TODO: Tests the form component renders

    it('Renders button to save changes the bill payment', () => {
        const { getByText } = render(
            <EditPaymentPage />
        )

        expect(getByText('Save')).toBeInTheDocument()
    })

    it('Renders button to delete the bill payment', () => {
        const { getByText } = render(
            <EditPaymentPage />
        )

        expect(getByText('Delete')).toBeInTheDocument()
    })
})

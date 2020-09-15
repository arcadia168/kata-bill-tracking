import React from 'react'
import { render } from '@testing-library/react'
import AddPaymentPage from '../AddPaymentPage/AddPaymentPage';
import { Provider } from 'react-redux'
import store from '../../state/store'

describe('Edit Payment Page', () => {
    it('Renders the name of the page', () => {
        const { getByText } = render(
            <Provider store={store}>
                <AddPaymentPage />
            </Provider>
        )

        expect(getByText('Add A Bill')).toBeInTheDocument()
    })

    // TODO: Test htmlFor the form component

    it('Renders button to add new payment', () => {
        const { getByText } = render(
            <Provider store={store}>
                <AddPaymentPage />
            </Provider>
        )

        expect(getByText('Add new payment')).toBeInTheDocument()
    })
})

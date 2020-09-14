import React from 'react'
import { render } from '@testing-library/react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import BillPaymentItem from './BillPayment'

describe('Bill Payment Item', () => {
    it('Renders the name of the bill', () => {
        const { getByText } = render(
            <Router>
                <BillPaymentItem
                    name="Netflix"
                    price="£11.99"
                    frequency="Monthly"
                    nextOccurringDate="06/09/2020"
                />
            </Router>
            )

        expect(getByText('Netflix')).toBeInTheDocument()
    })

    it('Renders the price of the bill', () => {
        const { getByText } = render(
            <Router>
                <BillPaymentItem
                    name="Netflix"
                    price="£11.99"
                    frequency="Monthly"
                    nextOccurringDate="06/09/2020"
                />
            </Router>
            )

        expect(getByText('£11.99')).toBeInTheDocument()
    })

    it('Renders the frequency of the bill', () => {
        const { getByText } = render(
            <Router>
                <BillPaymentItem
                    name="Netflix"
                    price="£11.99"
                    frequency="Monthly"
                    nextOccurringDate="06/09/2020"
                />
            </Router>
            )

        expect(getByText('Monthly')).toBeInTheDocument()
    })

    it('Renders the next occurring date of the bill', () => {
        const { getByText } = render(
            <Router>
                <BillPaymentItem
                    name="Netflix"
                    price="£11.99"
                    frequency="Monthly"
                    nextOccurringDate="06/09/2020"
                />
            </Router>
            )

        expect(getByText('Next: 06/09/2020')).toBeInTheDocument()
    })
})

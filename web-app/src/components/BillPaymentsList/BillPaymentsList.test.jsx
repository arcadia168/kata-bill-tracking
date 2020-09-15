import React from 'react'
import { render } from '@testing-library/react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import BillPaymentsList from './BillPaymentsList'

describe('Bill Payment List', () => {
    it('Renders the list of bills passed to it', () => {
        const bills = [
            {
                name: 'Rent',
                price: '500',
                frequency: 'Monthly',
                nextOccurringDate: '7th January, 2021'
            },
            {
                name: 'Gym Membership',
                price: '19',
                frequency: 'Monthly',
                nextOccurringDate: '1st February, 2021'
            },
            {
                name: 'TV License',
                price: '157.50',
                frequency: 'Annual',
                nextOccurringDate: '28th April, 2021'
            },
            {
                name: 'Dog Walker',
                price: '20',
                frequency: 'Weekly',
                nextOccurringDate: '7th January, 2021'
            },
        ];

        const { getByText, getAllByText } = render(
            <Router>
                <BillPaymentsList
                    bills={bills}
                />
            </Router>
            )

        expect(getByText('Rent')).toBeInTheDocument()

        expect(getByText('Gym Membership')).toBeInTheDocument()
        expect(getByText('Next: 1st February, 2021')).toBeInTheDocument()

        expect(getByText('TV License')).toBeInTheDocument()
        expect(getByText('£157.50')).toBeInTheDocument()
        expect(getByText('Annual')).toBeInTheDocument()
        expect(getByText('Next: 28th April, 2021')).toBeInTheDocument()

        expect(getByText('Dog Walker')).toBeInTheDocument()
        expect(getByText('Weekly')).toBeInTheDocument()
    })
})

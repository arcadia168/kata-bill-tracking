import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import PaymentTrackerButton from './PaymentTrackerButton';

describe('Payment Tracker Button', () => {
    it('Renders the button label', () => {
        const { getByText } = render(
            <Router>
                <PaymentTrackerButton
                    buttonLabel="Some label"
                />
            </Router>
            )

        expect(getByText('Some label')).toBeInTheDocument()
    })

    it('Runs onClickHandler when clicked', () => {
        const someClickHandler = jest.fn();

        const { getByText } = render(
            <Router>
                <PaymentTrackerButton
                    buttonLabel="Some label"
                    onClickHandler={someClickHandler}
                />
            </Router>
            );

        fireEvent.click(getByText('Some label'));

        expect(someClickHandler).toHaveBeenCalled();
    })
})

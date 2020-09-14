import React from 'react'
import {
    useHistory,
} from 'react-router-dom'

import TitleBanner from '../TitleBanner/TitleBanner';
import PaymentDetailsForm from '../PaymentDetailsForm/PaymentDetailsForm';
import PaymentTrackerButton from '../PaymentTrackerButton/PaymentTrackerButton';

const AddPaymentPage = props => {
    const history = useHistory();

    return (
        <div className="add-payment-page__container">
            <TitleBanner title="Add A Bill" />
            <PaymentDetailsForm />
            <PaymentTrackerButton
                buttonLabel={'Add new payment'}
                deleteButton={false}
                onClickHandler={() => {history.push('add_payment')}}
            />
        </div>
    );
}

export default AddPaymentPage;

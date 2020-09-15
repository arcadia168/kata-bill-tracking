import React, {
    useState,
} from 'react';
import { useDispatch } from 'react-redux';
import {
    useHistory
} from 'react-router-dom';

import { createBillPayment } from '../../state/payments';
import TitleBanner from '../TitleBanner/TitleBanner';
import PaymentDetailsForm from '../PaymentDetailsForm/PaymentDetailsForm';
import PaymentTrackerButton from '../PaymentTrackerButton/PaymentTrackerButton';

const AddPaymentPage = props => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [nextOccurringDate, setNextOccurringDate] = useState();
    const [frequency, setFrequency] = useState();

    return (
        <div className="add-payment-page__container">
            <TitleBanner title="Add A Bill" />
            <div className="add-payment-page__content">
                <PaymentDetailsForm
                    name={name}
                    setName={setName}
                    price={price}
                    setPrice={setPrice}
                    nextOccurringDate={nextOccurringDate}
                    setNextOccurringDate={setNextOccurringDate}
                    frequency={frequency}
                    setFrequency={setFrequency}
                />
                <PaymentTrackerButton
                    buttonLabel={'Add new payment'}
                    deleteButton={false}
                    onClickHandler={() => {
                        //TODO: Validate fields here
                        const newPayment = {
                            name,
                            price,
                            nextOccurringDate,
                            frequency
                        }
                        dispatch(createBillPayment(newPayment));
                        history.push(`/`);
                    }}
                />
            </div>
        </div>
    );
}

export default AddPaymentPage;

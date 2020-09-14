import React, {
    useState,
} from 'react'
import axios from 'axios';

import TitleBanner from '../TitleBanner/TitleBanner';
import PaymentDetailsForm from '../PaymentDetailsForm/PaymentDetailsForm';
import PaymentTrackerButton from '../PaymentTrackerButton/PaymentTrackerButton';
import { createPayment } from '../../state/payments';
import { useDispatch } from 'react-redux'

const AddPaymentPage = props => {
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [nextOccurringDate, setNextOccurringDate] = useState();
    const [frequency, setFrequency] = useState();

    const dispatch = useDispatch()

    async function createNewPayment(newPayment) {
        try {
            const response = await axios.post('http://localhost:8080/payments', newPayment);
            console.info(`The creation of the new payment was successful`);
            console.info(`server response is: ${JSON.stringify(response)}`);

            // Invoke success action in redux, pass in bills.
            dispatch(createPayment(response.data));
        } catch(error) {
            console.error(`An error occurred fetching bills from the server: ${JSON.stringify(error)}`);

            //TODO: Invoke an error action.
        }
    }

    return (
        <div className="add-payment-page__container">
            <TitleBanner title="Add A Bill" />
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
                    createNewPayment(newPayment)
                }}
            />
        </div>
    );
}

export default AddPaymentPage;

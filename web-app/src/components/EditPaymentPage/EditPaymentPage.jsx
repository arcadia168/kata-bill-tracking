import React, {
    useState,
    useEffect
} from 'react'
import {
    useParams,
    useHistory
} from 'react-router-dom'
import axios from 'axios';

import TitleBanner from '../TitleBanner/TitleBanner';
import PaymentDetailsForm from '../PaymentDetailsForm/PaymentDetailsForm';
import PaymentTrackerButton from '../PaymentTrackerButton/PaymentTrackerButton';
import { updatePayment, deletePayment } from '../../state/payments';
import { useDispatch } from 'react-redux'

const EditPaymentPage = props => {
    const history = useHistory();

    const { id } = useParams();
    const [paymentId] = useState(id);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [nextOccurringDate, setNextOccurringDate] = useState();
    const [frequency, setFrequency] = useState();

    useEffect(() => {
        async function getBillDetailsFromServer() {
          try {
              const response = await axios.get(`http://localhost:8080/payments/${id}`);
              setName(response.data.name);
              setPrice(response.data.price);
              setNextOccurringDate(response.data.nextOccurringDate)
              setFrequency(response.data.frequency);
          } catch(error) {
              console.error(`An error occurred fetching bills from the server: ${JSON.stringify(error)}`);

              //TODO: Invoke an error action.
          }
        }

        getBillDetailsFromServer();
      }, []);

    const dispatch = useDispatch()

    async function updatePaymentOnServer(updatedPayment) {
        try {
            const response = await axios.patch(
                `http://localhost:8080/payments/${paymentId}`,
                updatedPayment
            );
            dispatch(updatePayment(response.data));
            history.push(`/`)
        } catch(error) {
            console.error(`An error occurred updating the bill on the server: ${JSON.stringify(error)}`);
            //TODO: Error handling - show error banner! Set error state via dispatch
        }
    }

    async function deletePaymentOnServer(paymentId) {
        try {
            await axios.delete(
                `http://localhost:8080/payments/${paymentId}`,
            );
            dispatch(deletePayment(paymentId));
            history.push(`/`)
        } catch(error) {
            console.error(`An error occurred fetching bills from the server: ${JSON.stringify(error)}`);
            //TODO: Error handling - show error banner! Set error state via dispatch
        }
    }

    return (
        <div className="edit-payment-page__container">
            <TitleBanner title="Edit A Bill" />
            <div className="edit-payment-page__content">
                <h1 className="edit-payment-page__subtitle">{name}</h1>
                <h3 className="edit-payment-page__description">Keep track of your household spending by adding your bills</h3>
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
                    buttonLabel={'Save'}
                    deleteButton={false}
                    onClickHandler={() => {
                        //TODO: Validate fields here

                        const updatedPayment = {
                            name,
                            price,
                            nextOccurringDate,
                            frequency,
                            id: paymentId
                        }
                        updatePaymentOnServer(updatedPayment)
                    }}
                    />
                <PaymentTrackerButton
                    buttonLabel={'Delete'}
                    deleteButton={true}
                    onClickHandler={() => {
                        console.info(`Delete button clicked`)
                        deletePaymentOnServer(paymentId)}
                    }
                    />
            </div>
        </div>
    );
}

export default EditPaymentPage;

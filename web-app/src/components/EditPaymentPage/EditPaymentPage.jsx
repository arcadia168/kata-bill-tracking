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
              debugger;
              const response = await axios.get(`http://localhost:8080/payments/${id}`);
              console.info(`The bills fetch was successful`);
              console.info(`server response is: ${JSON.stringify(response)}`);

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
                buttonLabel={'Save'}
                deleteButton={false}
                onClickHandler={() => {
                    debugger;
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
    );
}

export default EditPaymentPage;

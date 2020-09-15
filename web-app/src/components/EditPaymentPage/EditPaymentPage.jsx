import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import TitleBanner from "../TitleBanner/TitleBanner";
import PaymentDetailsForm from "../PaymentDetailsForm/PaymentDetailsForm";
import PaymentTrackerButton from "../PaymentTrackerButton/PaymentTrackerButton";
import { updateBillPayment, fetchBillPaymentDetails, deletePayment } from "../../state/payments";
import { useDispatch, useSelector } from "react-redux";

const EditPaymentPage = (props) => {
    const dispatch = useDispatch();
    const payments = useSelector(store => store.payments.payments)
    const history = useHistory();

    const { id } = useParams();
    const [paymentId] = useState(id);
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [nextOccurringDate, setNextOccurringDate] = useState();
    const [frequency, setFrequency] = useState();

    useEffect(() => {
    dispatch(fetchBillPaymentDetails(id));

    const billPaymentDetails = payments.find(payment => payment.id === id);

    setName(billPaymentDetails.name);
    setPrice(billPaymentDetails.price);
    setNextOccurringDate(billPaymentDetails.nextOccurringDate);
    setFrequency(billPaymentDetails.frequency);
    }, []);


  async function deletePaymentOnServer(paymentId) {
    try {
      await axios.delete(`http://localhost:8080/payments/${paymentId}`);
      dispatch(deletePayment(paymentId));
      history.push(`/`);
    } catch (error) {
      console.error(
        `An error occurred fetching bills from the server: ${JSON.stringify(
          error
        )}`
      );
      //TODO: Error handling - show error banner! Set error state via dispatch
    }
  }

  return (
    <div className="edit-payment-page__container">
      <TitleBanner title="Edit A Bill" />
      <div className="edit-payment-page__content">
        <h1 className="edit-payment-page__subtitle">{name}</h1>
        <h3 className="edit-payment-page__description">
          Keep track of your household spending by adding your bills
        </h3>
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
          buttonLabel={"Save"}
          deleteButton={false}
          onClickHandler={() => {
            debugger;
            const updatedPayment = {
              name,
              price,
              nextOccurringDate,
              frequency,
              id: paymentId,
            };
            dispatch(updateBillPayment(updatedPayment));
            history.push("/");
          }}
        />
        <PaymentTrackerButton
          buttonLabel={"Delete"}
          deleteButton={true}
          onClickHandler={() => {
            console.info(`Delete button clicked`);
            deletePaymentOnServer(paymentId);
          }}
        />
      </div>
    </div>
  );
};

export default EditPaymentPage;

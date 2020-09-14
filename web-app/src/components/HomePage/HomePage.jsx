import React, { useEffect } from 'react'
import axios from 'axios';
import TitleBanner from '../TitleBanner/TitleBanner';
import BillPaymentsList from '../BillPaymentsList/BillPaymentsList';
import PaymentTrackerButton from '../PaymentTrackerButton/PaymentTrackerButton';
import {
    useHistory
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPayments } from '../../state/payments';

const Home = () => {
  const history = useHistory();

  const dispatch = useDispatch()
  const payments = useSelector(store => store.payments)

  useEffect(() => {
    async function getBillsFromServer() {
      try {
          debugger;
          const response = await axios.get('http://localhost:8080/payments');
          debugger;
          console.info(`The bills fetch was successful`);
          console.info(`server response is: ${JSON.stringify(response)}`);

          // Invoke success action in redux, pass in bills.
          dispatch(fetchPayments(response.data));
      } catch(error) {
          console.error(`An error occurred fetching bills from the server: ${JSON.stringify(error)}`);

          //TODO: Invoke an error action.
      }
    }

    getBillsFromServer();
  }, payments);

  return (
      <div className="home-page__container">
        <TitleBanner title="Regular Payments" />
        <BillPaymentsList bills={payments}/>
        <PaymentTrackerButton
          buttonLabel={'Add a bill'}
          deleteButton={false}
          onClickHandler={() => {history.push('add_payment')}}
          />
      </div>
  )
}

export default Home;

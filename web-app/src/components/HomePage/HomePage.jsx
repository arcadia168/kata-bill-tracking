import React, { useEffect } from 'react'
import axios from 'axios';
import TitleBanner from '../TitleBanner/TitleBanner';
import BillPaymentsList from '../BillPaymentsList/BillPaymentsList';
import PaymentTrackerButton from '../PaymentTrackerButton/PaymentTrackerButton';
import {
    useHistory
} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBillPayments } from '../../state/payments';

const Home = () => {
  const history = useHistory();

  const dispatch = useDispatch()
  const payments = useSelector(store => store.payments.payments)

  useEffect(() => {
    dispatch(fetchBillPayments())
  }, []);

  return (
      <div className="home-page__container">
        <TitleBanner title="Regular Payments" />
        <div className="home-page__bill-list-container">
          <BillPaymentsList bills={payments}/>
        </div>
        <PaymentTrackerButton
          buttonLabel={'Add a bill'}
          deleteButton={false}
          onClickHandler={() => {history.push('add_payment')}}
          />
      </div>
  )
}

export default Home;

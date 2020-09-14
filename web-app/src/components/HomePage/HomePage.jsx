import React from 'react'
import TitleBanner from '../TitleBanner/TitleBanner';
import BillPaymentsList from '../BillPaymentsList/BillPaymentsList';
import PaymentTrackerButton from '../PaymentTrackerButton/PaymentTrackerButton';
import {
    useHistory
} from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { createPayment } from '../../state/payments';
import store from '../../state/store'

const Home = () => {
  const history = useHistory();

  const dispatch = useDispatch()
  const payments = useSelector(store => store.payments)

  const exampleAddPayment = () => dispatch(createPayment({
    name: 'Hello World',
  }))

  return (
      <div className="home-page__container">
        <TitleBanner title="Regular Payments" />
        <BillPaymentsList
              bills={payments}
              />
        <PaymentTrackerButton
          buttonLabel={'Add a bill'}
          deleteButton={false}
          onClickHandler={() => {history.push('add_payment')}}
          />
      </div>
  )
}

// const Example = () => {
//   const dispatch = useDispatch()
//   const payments = useSelector(store => store.payments)

//   const exampleAddPayment = () => dispatch(createPayment({
//     name: 'Hello World',
//   }))

//   return (
//     <div>
//       <h2>Example</h2>
//       {payments.map((payment, index) => (
//         <p key={index}>{payment.name}</p>
//       ))}
//       <button onClick={exampleAddPayment}>Add Payment</button>
//     </div>
//   )
// }

export default Home;

import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import store from './state/store'
import { createPayment } from './state/payments'
import HomePage from './components/HomePage/HomePage';
import BillPaymentsList from './components/BillPaymentsList/BillPaymentsList'

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <BillPaymentsList
            bills={
              [
                {
                    name: 'Rent',
                    price: '£500',
                    frequency: 'Monthly',
                    nextOccurringDate: '7th January, 2021'
                },
                {
                    name: 'Gym Membership',
                    price: '£19',
                    frequency: 'Monthly',
                    nextOccurringDate: '1st February, 2021'
                },
                {
                    name: 'TV License',
                    price: '£157.50',
                    frequency: 'Annual',
                    nextOccurringDate: '28th April, 2021'
                },
                {
                    name: 'Dog Walker',
                    price: '£20',
                    frequency: 'Weekly',
                    nextOccurringDate: '7th January, 2021'
                },
            ]
            }
          />
        </Route>
        <Route path="/add_payment">
          <Example />
        </Route>
        <Route path="/edit_payment">
          <Example />
        </Route>
      </Switch>
    </Router>
  </Provider>
)

const Example = () => {
  const dispatch = useDispatch()
  const payments = useSelector(store => store.payments)

  const exampleAddPayment = () => dispatch(createPayment({
    name: 'Hello World',
  }))

  return (
    <div>
      <h2>Example</h2>
      {payments.map((payment, index) => (
        <p key={index}>{payment.name}</p>
      ))}
      <button onClick={exampleAddPayment}>Add Payment</button>
    </div>
  )
}

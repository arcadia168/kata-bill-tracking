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
import BillPaymentItem from './components/BillPaymentItem/BillPaymentItem'

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <BillPaymentItem
            name="Netflix"
            price="£11.99"
            frequency="Monthly"
            nextOccurringDate="06/09/2020"
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

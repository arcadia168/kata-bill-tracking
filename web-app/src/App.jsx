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
import TitleBanner from './components/TitleBanner/TitleBanner';

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
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

const Home = () => (
  <div>
    <TitleBanner title="Home" />
    <Link to="/example">Go to /example</Link>
  </div>
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

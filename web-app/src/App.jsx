import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import store from './state/store'
import HomePage from './components/HomePage/HomePage';
// import EditPaymentPage from './components/EditPaymentPage/EditPaymentPage';
import AddPaymentPage from './components/AddPaymentPage/AddPaymentPage';

export default () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/add_payment">
          <AddPaymentPage />
        </Route>
        {/* <Route path="/edit_payment/:id">
          <EditPaymentPage />
        </Route> */}
      </Switch>
    </Router>
  </Provider>
)

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './state/store'
import HomePage from './components/HomePage/HomePage';
import AddPaymentPage from './components/AddPaymentPage/AddPaymentPage';
import EditPaymentPage from './components/EditPaymentPage/EditPaymentPage';

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
        <Route path="/edit_payment/:id">
          <EditPaymentPage/>
        </Route>
      </Switch>
    </Router>
  </Provider>
)

import React from 'react'
import TitleBanner from '../TitleBanner/TitleBanner';
import BillPaymentsList from '../BillPaymentsList/BillPaymentsList';
import PaymentTrackerButton from '../PaymentTrackerButton/PaymentTrackerButton';
import {
    Link,
    useHistory
} from 'react-router-dom'

const Home = () => {
  const history = useHistory();

  const bills =  [
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
  ];

  return (
    <div className="home-page__container">
      <TitleBanner title="Regular Payments" />
      <BillPaymentsList
            bills={bills}
      />
      <PaymentTrackerButton
        buttonLabel={'Add a bill'}
        deleteButton={false}
        onClickHandler={() => {history.push('add_payment')}}
      />
    </div>
  )
}

export default Home;

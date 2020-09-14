import React from 'react'
import TitleBanner from '../TitleBanner/TitleBanner';
import BillPaymentsList from '../BillPaymentsList/BillPaymentsList';
import {
    Link,
} from 'react-router-dom'

const Home = () => {
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
    </div>
  )
}

export default Home;

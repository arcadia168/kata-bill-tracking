import React from 'react'
import {
    Link,
} from 'react-router-dom'

const BillPaymentItem = props => {
    const { name, price, frequency, nextOccurringDate } = props;

    return (
        <Link to="/example" className="bill-payment-item__container">
            <div className="bill-payment-item__name-and-price-container">
                <div className="bill-payment-item__name">
                    {name}
                </div>
                <div className="bill-payment-item__price">
                    {price}
                </div>
            </div>
            <div className="bill-payment-item_frequency-and-date-container">
                <div className="bill-payment-item__frequency">
                    {frequency}
                </div>
                <div className="bill-payment-item__next-occurrence">
                    Next: {nextOccurringDate}
                </div>
            </div>
        </Link>
    );
}

export default BillPaymentItem;

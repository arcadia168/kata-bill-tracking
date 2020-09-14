import React from 'react'
import {
    useHistory,
} from 'react-router-dom'

const BillPaymentItem = props => {
    const { id, name, price, frequency, nextOccurringDate } = props;
    const history = useHistory();

    return (
        <div
            onClick={() => {history.push(`edit_payment/${id}`)}}
            className="bill-payment-item__container"
        >
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
        </div>
    );
}

export default BillPaymentItem;

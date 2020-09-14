import React from 'react'

const PaymentDetailsForm = props => {
    return (
        <div className="payment-details__container">
            <div className="payment-details__input-container">
                <label for="bill_name">Name</label>
                <input id="bill_name" name="bill_name" className="payment-details__input payment-details__name" type="text" />
            </div>
            <div className="payment-details__input-container">
                <label for="bill_amount">Amount</label>
                <input id="bill_amount" name="bill_amount" className="payment-details__input payment-details__amount" type="text" />
            </div>
            <div className="payment-details__input-container">
                <label for="bill_date">Start Date</label>
                <input id="bill_date" name="bill_date" className="payment-details__input payment-details__start-date" type="date" />
            </div>
            <div className="payment-details__input-container">
                <label for="bill_frequency">Frequency</label>
                <select id="bill_frequency" name="bill_frequency" className="payment-details__input payment-details__frequency" name="frequency" id="frequency">
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                    <option value="annually">Annually</option>
                </select>
            </div>
        </div>
    );
}

export default PaymentDetailsForm;

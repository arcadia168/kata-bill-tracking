import React from 'react'

const PaymentDetailsForm = props => {

    const {
        name,
        setName,
        price,
        setPrice,
        nextOccurringDate,
        setNextOccurringDate,
        frequency,
        setFrequency,
    } = props;

    return (
        <div className="payment-details-form__container">
            <div className="payment-details-form__input-container">
                <label htmlFor="bill_name">Name</label>
                <input
                    id="bill_name"
                    name="bill_name"
                    className="payment-details-form__input payment-details-form__name"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            <div className="payment-details-form__input-container">
                <label htmlFor="bill_amount">Amount</label>
                <input
                    id="bill_amount"
                    name="bill_amount"
                    className="payment-details-form__input payment-details-form__amount"
                    type="number"
                    value={price}
                    onChange={e => {
                        setPrice(e.target.value);
                    }}
                />
            </div>
            <div className="payment-details-form__input-container">
                <label htmlFor="bill_date">Start Date</label>
                <input
                    id="bill_date"
                    name="bill_date"
                    className="payment-details-form__input payment-details-form__start-date"
                    type="date"
                    value={nextOccurringDate}
                    onChange={e => {
                        setNextOccurringDate(e.target.value);
                    }}
                />
            </div>
            <div className="payment-details-form__input-container">
                <label htmlFor="bill_frequency">Frequency</label>
                <select
                    id="bill_frequency"
                    name="bill_frequency"
                    className="payment-details-form__input payment-details-form__frequency"
                    name="frequency"
                    id="frequency"
                    onChange={e => {
                        setFrequency(e.target.value);
                    }}
                >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Annually">Annually</option>
                </select>
            </div>
        </div>
    );
}

export default PaymentDetailsForm;

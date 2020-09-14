import React from 'react'
import BillPaymentItem from '../BillPaymentItem/BillPaymentItem';

const BillPaymentsList = props => {
    const { bills } = props;

    return (
        <ul className="bill-payments-list__container">
            {
                bills.map((bill, index) =>
                    <BillPaymentItem
                        key={index}
                        name={bill.name}
                        price={bill.price}
                        frequency={bill.frequency}
                        nextOccurringDate={bill.nextOccurringDate}
                    />
                )
            }
        </ul>
    );
}

export default BillPaymentsList;

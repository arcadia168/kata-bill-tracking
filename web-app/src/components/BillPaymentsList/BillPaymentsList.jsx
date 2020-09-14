import React from 'react'
import BillPaymentItem from '../BillPaymentItem/BillPaymentItem';

const BillPaymentsList = props => {
    const { bills } = props;

    return (
        <div className="bill-payments-list__container">
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
        </div>
    );
}

export default BillPaymentsList;

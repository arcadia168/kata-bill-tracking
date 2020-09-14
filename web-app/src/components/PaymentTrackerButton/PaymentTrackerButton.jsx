import React from 'react'
import {
    Link,
} from 'react-router-dom'

const BillPaymentItem = props => {
    const { buttonLabel, onClickHandler, deleteButton} = props;

    return (
        <button
            className={`payment-tracker-button ${deleteButton === true ? 'payment-tracker-button--delete' : 'payment-tracker-button--action'}`}
            type="button"
            onClick={onClickHandler}
        >
            {buttonLabel}
        </button>
    );
}

export default BillPaymentItem;

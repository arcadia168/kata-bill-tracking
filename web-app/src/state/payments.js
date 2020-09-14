import { createSlice } from '@reduxjs/toolkit'

// Reducers are PURE FUNCTIONS and should only ever return NEW state
// We should NEVER mutate state in a reducer.

const paymentsSlice = createSlice({
  name: 'payments',
  initialState: [],
  reducers: {
    fetchPayments: (state, action) => {
      console.info(`fetchPayments action handler invoked with paylod:`);
      console.info(action.payload);
      return state = action.payload;
    },
    createPayment: (state, action) => {
      console.info(`createPayment action handler invoked with paylod:`);
      console.log(action.payload)
      return state = state.concat(action.payload);
    },
    updatePayment: (state, action) => {
      console.info(`updatePayment action handler invoked with paylod:`);
      console.log(action.payload);

      const newUpdatedPayments = state.map(
        payment => {
          if (payment.id === action.payload.id) {
            return action.payload;
          }
          return payment;
        }
      )

      return state = newUpdatedPayments;
    },
    deletePayment: (state, action) => {
      console.info(`deletePayment action handler invoked with paylod:`);
      console.log(action.payload);

      const newUpdatedPayments = state.map(
        payment => {
          if (payment.id === action.payload.id) {
            return;
          }
          return payment;
        }
      )

      return state = newUpdatedPayments;
    },
  },
})

const { actions, reducer } = paymentsSlice
export const { fetchPayments, createPayment, updatePayment, deletePayment } = actions
export default reducer

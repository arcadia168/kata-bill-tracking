import { createSlice } from '@reduxjs/toolkit'

const paymentsSlice = createSlice({
  name: 'payments',
  initialState: [],
  reducers: {
    fetchPayments: (state, action) => {
      debugger;
      console.info(`fetchPayments action handler invoked with paylod:`);
      console.info(action.payload);
      return state = state.concat(action.payload);
    },
    createPayment: (state, action) => {
      debugger;
      console.info(`createPayment action handler invoked with paylod:`);
      console.log(action.payload)
      return state = state.concat(action.payload);
    },
    updatePayment: (state, action) => console.log(action.payload),
    deletePayment: (state, action) => console.log(action.payload),
  },
})

const { actions, reducer } = paymentsSlice
export const { fetchPayments, createPayment, updatePayment, deletePayment } = actions
export default reducer

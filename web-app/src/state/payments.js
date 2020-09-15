import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchBillPayments = createAsyncThunk(
  "payments/billPaymentsLoading",
  async () => {
    try {
      const response = await axios.get("http://localhost:8080/payments");
      return response.data;
    } catch (error) {
      console.error(
        `An error occurred fetching bills from the server: ${JSON.stringify(
          error
        )}`
      );
    }
  }
);

const paymentsSlice = createSlice({
  name: "payments",
  initialState: {
    loading: "idle",
    payments: [],
  },
  reducers: {
    fetchPayments: (state, action) => {
      console.info(`fetchPayments action handler invoked with paylod:`);
      console.info(action.payload);
      return (state.payments = action.payload);
    },
    createPayment: (state, action) => {
      console.info(`createPayment action handler invoked with paylod:`);
      console.log(action.payload);
      return (state.payments = state.concat(action.payload));
    },
    updatePayment: (state, action) => {
      console.info(`updatePayment action handler invoked with paylod:`);
      console.log(action.payload);

      const newUpdatedPayments = state.map((payment) => {
        if (payment.id === action.payload.id) {
          return action.payload;
        }
        return payment;
      });

      return (state.payments = newUpdatedPayments);
    },
    deletePayment: (state, action) => {
      console.info(`deletePayment action handler invoked with paylod:`);
      console.log(action.payload);

      const newUpdatedPayments = state.map((payment) => {
        if (payment.id === action.payload.id) {
          return;
        }
        return payment;
      });

      return (state.payments = newUpdatedPayments);
    },
  },
  extraReducers: {
    [fetchBillPayments.pending.type]: (state, action) => {},
    [fetchBillPayments.fulfilled.type]: (state, action) => {
      state.payments = action.payload;
    },
    [fetchBillPayments.rejected.type]: (state, action) => {},
  },
});

const { actions, reducer } = paymentsSlice;
export const {
  fetchPayments,
  createPayment,
  updatePayment,
  deletePayment,
} = actions;
export default reducer;

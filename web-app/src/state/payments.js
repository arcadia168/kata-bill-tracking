import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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

export const updateBillPayment = createAsyncThunk(
  "payments/updateBillPayment",
  async (updatedBillPayment) => {
    debugger;
    try {
      const response = await axios.patch(
        `http://localhost:8080/payments/${updatedBillPayment.id}`,
        updatedBillPayment
      );
      return response.data;
    } catch (error) {
      console.error(
        `An error occurred updatin a bill on the server: ${JSON.stringify(
          error
        )}`
      );
    }
  }
);

export const fetchBillPaymentDetails = createAsyncThunk(
  "payments/fetchBillPaymentDetails",
  async (billPaymentId) => {
    debugger;
    try {
      const response = await axios.get(
        `http://localhost:8080/payments/${billPaymentId}`
      );
      return response.data;
    } catch (error) {
      console.error(
        `An error occurred fetching a single bill details on the server: ${JSON.stringify(
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
    createPayment: (state, action) => {
      console.info(`createPayment action handler invoked with paylod:`);
      console.log(action.payload);
      return (state.payments = state.concat(action.payload));
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
    [updateBillPayment.pending.type]: (state, action) => {},
    [updateBillPayment.fulfilled.type]: (state, action) => {
      console.info(
        `updatePayment.fulfilled.type action handler invoked with paylod:`
      );
      console.log(action.payload);

      const newUpdatedPayments = state.payments.map((payment) => {
        if (payment.id === action.payload.id) {
          return action.payload;
        }
        return payment;
      });

      state.payments = newUpdatedPayments;
    },
    [updateBillPayment.rejected.type]: (state, action) => {},
    [fetchBillPaymentDetails.pending.type]: (state, action) => {},
    [fetchBillPaymentDetails.fulfilled.type]: (state, action) => {
      console.info(
        `fetchBillPaymentDetails.fulfilled.type action handler invoked with paylod:`
      );
      console.log(action.payload);

      const newUpdatedPayments = state.payments.map((payment) => {
        if (payment.id === action.payload.id) {
          return action.payload;
        }
        return payment;
      });

      state.payments = newUpdatedPayments;
    },
    [fetchBillPaymentDetails.rejected.type]: (state, action) => {},

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

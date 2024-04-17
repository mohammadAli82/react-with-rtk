import { createSlice } from '@reduxjs/toolkit'

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    amount: 1,
  },
  reducers: {
    increment: (state) => {
      state.amount += 1  //immer
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer
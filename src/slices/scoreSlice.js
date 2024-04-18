import { createSlice } from '@reduxjs/toolkit'

export const scoreSlice = createSlice({
  name: 'score',
  initialState: {
    no: 6,
  },
  reducers: {
    increment: (state) => {
      state.no += 1  //immer
    },
    decrement: (state) => {
        state.no -= 1  //immer
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment,decrement } = scoreSlice.actions

export default scoreSlice.reducer
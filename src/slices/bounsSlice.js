import { createSlice } from '@reduxjs/toolkit'

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState: {
    points: 1,
  },
  reducers: {
    increment: (state) => {
      state.points += 1  //immer
    },
    decrement: (state) => {
        state.points -= 1  //immer
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment,decrement } = bonusSlice.actions

export default bonusSlice.reducer
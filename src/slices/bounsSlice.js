import { createSlice } from '@reduxjs/toolkit'
import { incrementByAmount } from './accountSlice'

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
  extraReducers:(builder)=>{
    builder.addCase(incrementByAmount,(state,action)=>{
      if(action.payload>=100){
        state.points+=1
      }
    })
  }
})

// Action creators are generated for each case reducer function
export const { increment,decrement,extraReducers } = bonusSlice.actions

export default bonusSlice.reducer
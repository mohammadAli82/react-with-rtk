import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUserAccount=createAsyncThunk(
  'account/getUser',
  async(userId,thunkAPI)=>{
    const {data}=await axios.get(`http://localhost:3500/accounts/${userId}`)
    return data.amount
  }
)
// getUserAccount(1)

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
  extraReducers:(builder)=>{
    builder.addCase(getUserAccount.fulfilled,(state,action)=>{
      state.amount=action.payload
    })
  }
})
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer
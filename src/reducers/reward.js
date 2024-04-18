import { createReducer,createAction } from "@reduxjs/toolkit";

const initialState={
    points:15,
}
export const increment=createAction('reward/increment')

const rewardsReducer=createReducer(initialState,(builder)=>{
    builder
    .addCase(increment,(state,action)=>{
        state.points++
    })
})

export default rewardsReducer
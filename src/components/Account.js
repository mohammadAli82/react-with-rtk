import React from 'react'
import { decrement, increment, incrementByAmount } from '../slices/accountSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';

function Account() {
  const dispatch=useDispatch();
  const amount=useSelector(state=>state.account.amount)
  const [value, setValue] = useState('');
  return (
    <div>
      <h4>Account Component</h4>
      <h3>Amount:{amount}</h3>
      <button onClick={()=>dispatch(increment())}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <input type='text' onChange={(e)=>setValue(+e.target.value)}/>
      <button onClick={()=>dispatch(incrementByAmount(value))}>incre by ammount</button>
    </div>
  )
}

export default Account

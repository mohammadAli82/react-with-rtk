import React from 'react'
import { increment } from '../slices/bounsSlice'
import { decrement } from '../slices/bounsSlice'
import { useDispatch, useSelector } from 'react-redux'

function Bonus() {
    const points=useSelector(state=>state.bonus.points);
    const dispatch=useDispatch();
  return (
    <div>
      <b>Bonus Components</b>
      <h3>Total point:{points}</h3>
      <button onClick={()=>dispatch(increment())}>increment point</button>
      <button onClick={()=>dispatch(decrement())}>decrement point</button>
    </div>
  )
}

export default Bonus

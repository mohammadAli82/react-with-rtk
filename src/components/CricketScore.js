import React from 'react'
import { increment } from '../slices/scoreSlice';
import { useDispatch, useSelector } from 'react-redux'

function Score() {
  const dispatch=useDispatch();
  const score=useSelector(state=>state.score.no)
  return (
    <div>
      <h4>Score</h4>
      <h3>Amount:{score}</h3>
      <button onClick={()=>dispatch(increment())}>increment</button>
    </div>
  )
}

export default Score

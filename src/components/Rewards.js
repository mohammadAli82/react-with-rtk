import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../reducers/reward';

function Rewards() {
    const points=useSelector(state=>state.rewards.points);
    const dispatch=useDispatch();
  return (
    <div>
      <b>Rewards Components</b>
      <h3>Total point:{points}</h3>
      <button onClick={()=>dispatch(increment())}>increment point</button>
      {/* <button onClick={()=>dispatch(decrement())}>decrement point</button> */}
    </div>
  )
}

export default Rewards

import React from 'react'
import Account from './components/Account'
import Bonus from './components/Bonus'
import Rewards from './components/Rewards'
import Score from './components/CricketScore'

function App() {
  return (
    <div>
      <Account></Account>
      <br/><br/>
      <Bonus></Bonus>
      <br/><br/>
      <Rewards></Rewards>
      <br/><br/>
      <Score></Score>
    </div>
  )
}

export default App

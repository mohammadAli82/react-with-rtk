import React from 'react'
import Account from './components/Account'
import Bonus from './components/Bonus'
import Rewards from './components/Rewards'
import Score from './components/CricketScore'
import Admin from './components/Admin'

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
      <br></br>
      <Admin></Admin>
      
    </div>
  )
}

export default App

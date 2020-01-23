import React, { useState, useEffect } from 'react';

import './App.css';

import Dashboard from './components/Dashboard'
import Display from './components/Display'

function App() {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)

  //IF BALLS IS 4 reset to 0 or STRIKES IS 3 reset to 0
  useEffect(() => {
    if(balls === 4) {
      setBalls(0)
    } 
    if(strikes === 3) {
      setStrikes(0)
    }
  }, [balls, strikes])

  //FOUL
  const foul = () => {
    if(strikes === 0) {
      setStrikes(1)
    }
    if(strikes === 1) {
      setStrikes(2)
    } 
    return
  }


  //HIT
  const hit = () => {
    setStrikes(0);
    setBalls(0);
    return;
  }


  return (
    <div className="App">
      <Dashboard foul={foul} hit={hit}/>
      <Display balls={balls} strikes={strikes}/>
    </div>
  );
}

export default App;

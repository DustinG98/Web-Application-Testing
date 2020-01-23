import React from 'react';

import './App.css';

import Dashboard from './components/Dashboard'
import Display from './components/Display'

export const foul = (strikes) => {
  if(strikes === 0) {
    return strikes = 1;
  }
  if(strikes === 1) {
    return strikes = 2
  }
  return strikes = 2;
}

export const hit = (currentBalls, currentStrikes) => {
  currentBalls = 0;
  currentStrikes = 0;
  return [currentBalls, currentStrikes];
}

export const addStrike = (currentStrikes) => {
  return currentStrikes + 1;
}

export const addBall = (currentBalls) => {
  return currentBalls + 1;
}


class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  }

  //IF BALLS IS 4 reset to 0 or STRIKES IS 3 reset to 0
  componentDidUpdate() {
    if(this.state.balls === 4) {
      this.setState({
        ...this.state,
        balls: 0
      })
    }
    if(this.state.strikes === 3) {
      this.setState({
        ...this.state,
        strikes: 0
      })
    }
  }

  //FOUL
   foul = () => {
     const newStrikes = foul(this.state.strikes)
     this.setState({...this.state, strikes: newStrikes})

  }


  //HIT
  hit = () => {
    const newState = hit(this.state.balls, this.state.strikes)

    this.setState({
      balls: newState[0],
      strikes: newState[1]
    })
    return;
  }

  //ADD STRIKE
  addStrike = () => {
    const newStrikes = addStrike(this.state.strikes)
    this.setState({...this.state, strikes: newStrikes})
  }

  //ADD BALL
  addBall = () => {
    const newBalls = addBall(this.state.balls)
    this.setState({...this.state, balls: newBalls})
  }
 
  render() {
    return (
      <div className="App">
        <Dashboard foul={this.foul} hit={this.hit} addBall={this.addBall} addStrike={this.addStrike} />
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
      </div>
    );
  }
}

export default App;

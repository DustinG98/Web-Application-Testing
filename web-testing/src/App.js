import React from 'react';

import './App.css';

import Dashboard from './components/Dashboard'
import Display from './components/Display'

export const foulTest = (strikes) => {
  if(strikes === 0) {
    return strikes = 1;
  }
  if(strikes === 1) {
    return strikes = 2
  }
  return strikes = 2;
}

export const hitTest = () => {
  let balls = 0;
  let strikes = 0;
  return balls, strikes;
}


class App extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  }

  //IF BALLS IS 4 reset to 0 or STRIKES IS 3 reset to 0
  // useEffect(() => {
  //   if(balls === 4) {
  //     setBalls(0)
  //   } 
  //   if(strikes === 3) {
  //     setStrikes(0)
  //   }
  // }, [balls, strikes])
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
    if(this.state.strikes === 0) {
      this.setState({...this.state, strikes: 1})
    }
    if(this.state.strikes === 1) {
      this.setState({...this.state, strikes: 2})
    } 
    return
  }


  //HIT
  hit = () => {
    this.setState({
      balls: 0,
      strikes: 0
    })
    return;
  }

  //ADD STRIKE
  addStrike = () => {
    this.setState({...this.state, strikes: this.state.strikes + 1})
  }

  //ADD BALL
  addBall = () => {
    this.setState({...this.state, balls: this.state.balls + 1})
  }
 
  render() {
    return (
      <div className="App">
        <Dashboard foul={this.foul} hit={this.hit} addBall={this.addBall} addStrike={this.addStrike}/>
        <Display balls={this.state.balls} strikes={this.state.strikes}/>
      </div>
    );
  }
}

export default App;

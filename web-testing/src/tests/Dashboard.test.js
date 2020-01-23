import React from 'react'

import { render } from '@testing-library/react'
import Dashboard from '../components/Dashboard'
import {foul, hit, addStrike, addBall} from '../App'

test('Dashboard renders without crashing', () => {
    render(<Dashboard/>)
})

test('foul increments strikes by 1 unless its at 2', () => {
    let currentStrikes = 0;
    let expected = 1;
    function getActual(current){
      return foul(current)
    }
    expect(getActual(currentStrikes)).toBe(expected)
  
    currentStrikes = 1;
    expected = 2;
    expect(getActual(currentStrikes)).toBe(expected)
  
    currentStrikes = 2;
    expected = 2;
    expect(getActual(currentStrikes)).toBe(expected)
  })

test('hit resets balls and strikes to 0', () => {
    let currentBalls = 2;
    let currentStrikes = 2;

    const expected = [0, 0];
    const actual = hit(currentBalls, currentStrikes)

    expect(actual).toStrictEqual(expected)
})

test('addStrike adds a strike to the current strikes', () => {
    let currentStrikes = 0;

    const expected = 1;
    const actual = addStrike(currentStrikes)

    expect(actual).toBe(expected)
})

test('addBall adds a ball to the current balls', () => {
    let currentBalls = 0;

    const expected = 1;
    const actual = addBall(currentBalls)

    expect(actual).toBe(expected)
})
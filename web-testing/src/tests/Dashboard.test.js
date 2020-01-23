import React from 'react'

import { render, fireEvent } from '@testing-library/react'
import Dashboard from '../components/Dashboard'
import Display from '../components/Display'
import {foulTest, hitTest} from '../App'

test('Dashboard renders without crashing', () => {
    render(<Dashboard/>)
})

test('foul increments strikes by 1 unless its at 2', () => {
    let currentStrikes = 0;
    let expected = 1;
    function getActual(current){
      return foulTest(current)
    }
    expect(getActual(currentStrikes)).toBe(expected)
  
    currentStrikes = 1;
    expected = 2;
    expect(getActual(currentStrikes)).toBe(expected)
  
    currentStrikes = 2;
    expected = 2;
    expect(getActual(currentStrikes)).toBe(expected)
  })
  

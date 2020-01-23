import React from 'react'

import { render } from '@testing-library/react'
import Display from '../components/Display'

test('Display renders without crashing', () => {
    render(<Display/>)
})

test('Display renders balls and strikes', () => {
    const { getByTestId } = render(<Display/>)
    const balls = getByTestId('balls')
    const strikes = getByTestId('strikes')
    console.log(balls, strikes)
})
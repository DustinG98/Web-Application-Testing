import React from 'react'

const Display = ({ balls, strikes }) => {
    return (
        <div>
            <h2>Welcome to the display</h2>
            <p data-testid="balls">Balls: {balls}</p>
            <p data-testid="strikes">Strikes: {strikes}</p>
        </div>
    )
}

export default Display
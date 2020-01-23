import React from 'react'

const Display = ({ balls, strikes }) => {
    return (
        <div>
            <h2>Welcome to the display</h2>
            <p>Balls: {balls}</p>
            <p>Strikes: {strikes}</p>
        </div>
    )
}

export default Display
import React from 'react'

const Display = ({ balls, strikes, outs, innings }) => {
    return (
        <div>
            <p data-testid="balls">Balls: {balls}</p>
            <p data-testid="strikes">Strikes: {strikes}</p>
            <p>Outs: {outs}</p>
            {console.log(innings)}
            <p>Inning: {innings === 1 ? 1 : Math.floor(innings / 2)}</p>
        </div>
    )
}

export default Display
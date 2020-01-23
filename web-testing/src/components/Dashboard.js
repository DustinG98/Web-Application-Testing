import React from 'react'

const Dashboard = ({ foul, hit, addBall, addStrike }) => {
    return (
        <div>
            <h2>Welcome to the dashboard</h2>
            <button onClick={() => foul()}>Foul</button>
            <button onClick={() => hit()}>Hit</button>
            <button onClick={() => addBall()}>Increment Ball</button>
            <button onClick={() => addStrike()}>Increment Strike</button>
        </div>
    )
}

export default Dashboard
import React from 'react'

const Dashboard = ({ foul, hit, addBall, addStrike, addOut }) => {
    return (
        <div>
            <h2>Dashboard</h2>
            <button onClick={() => foul()}>Foul</button>
            <button onClick={() => hit()}>Hit</button>
            <button onClick={() => addBall()}>Increment Ball</button>
            <button onClick={() => addStrike()}>Increment Strike</button>
            <button onClick={() => addOut()}>Increment Out</button>
        </div>
    )
}

export default Dashboard
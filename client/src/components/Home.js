import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div className="home">
        <div className="title">
            <h1>Memory Quest</h1>
        </div>
        <div className="start">
            <button className="game-button">Start Game</button>
        </div>
        <div className="game-setting">
            <button className="setting-button">Setting</button>
        </div>
    </div>
  )
}

export default Home
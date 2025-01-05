import React from 'react'
import "./Scorecard.css"
const ScoreCard = ({moves}) => {
  return (
    <div className="score-card">
        <p className="score">Score:{0}</p>
        <p className="moves">Moves:{moves}</p>
    </div>
  )
}

export default ScoreCard
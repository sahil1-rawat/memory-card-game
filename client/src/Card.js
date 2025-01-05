import React from 'react'

const Card = () => {
  return (
    <div className="matching-cards">
<ScoreCard moves={moves}/>
        <div className='card-grid'>
        {cards.map((card) => (
          <SingleCard 
          key={card.id}
           card={card}
           handleChoice={handleChoice}
           flipped={card===choiceOne || card===choiceTwo || card.matched}
           disabled={disabled}
           visibility={card.matched} />
        ))}
      </div>
    </div>
  )
}

export default Card
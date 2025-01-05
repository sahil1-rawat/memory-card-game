import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import ScoreCard from './ScoreCard';

const GameScreen = ({cardImages}) => {
    const [cards, setCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled,setDisabled]=useState(false);

  // shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.6)
      .map((card) => ({ ...card, id: Math.random()*1000 }));

    setCards(shuffledCards);
    setMoves(0);
  };
// handle a choice
  const handleChoice = (card) => {
    // console.log(card);
    choiceOne?setChoiceTwo(card):setChoiceOne(card);
    
  };

  // compare 2 selected cards
  useEffect(()=>{
    if(choiceOne && choiceTwo){
      setDisabled(true);
      if(choiceOne.src===choiceTwo.src){
        // console.log('those cards match')
        setCards(prevCards=>{
          return prevCards.map(card=>{
            if(card.src===choiceOne.src){
              return {...card,matched:true}
            }
            else{
              return card
            }
          })
        })
        resetTurn()
      }
      else{
        // console.log("those cards don't match");
        setTimeout(()=>resetTurn(),1000);
      }
    }
  },[choiceOne,choiceTwo])
  // console.log(cards);
  // reset choices & increase turn
  const resetTurn=()=>{
    setChoiceOne(null);
    setChoiceTwo(null);
    setMoves(prevmoves=>prevmoves+1)
    setDisabled(false);
  }
  return (
      <div className="game-screen">
        <h1>Memory Quest</h1>
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
<button className="new-game" onClick={shuffleCards}>New Game</button>
    </div>
  )
}

export default GameScreen
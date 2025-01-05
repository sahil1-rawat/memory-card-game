import React from 'react'
import "./SingleCard.css"
const SingleCard = (props) => {
  const {handleChoice,card,flipped,disabled,visibility}=props;
  const handleClick=()=>{
    if(!disabled){
      handleChoice(card);
    }
 
  }
  return (
    <div className='card'>
        <div className={flipped?"flipped":""} >
              <img  className="front" src={card.src} alt="card front" />
              <img className="back" src="/asset/cover2.jpg" onClick={handleClick} alt="card back" />
            </div>
    </div>
  )
}

export default SingleCard
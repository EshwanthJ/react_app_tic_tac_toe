import React from 'react';
import GameState from "./GameState"

const Reset = ({ gameState, handleReset }) => {
  if(gameState === GameState.inProgress){
    return;
  } else {
    return (
        <button className='reset-button' onClick={(e)=>handleReset()}>Reset</button>
      )
  }
}

export default Reset
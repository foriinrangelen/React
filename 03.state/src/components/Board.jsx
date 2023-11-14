import React from 'react'

const Board = ({ diceSrc, Count, user }) => {
  return (
    <div className="board">
      <h4>
        {user}({diceSrc})
      </h4>
      <img src={`img/dice${diceSrc}.png`} style={{ width: 150, padding: 10 }} />
      <div className="score-area">
        현재 점수는?
        <div>{Count}</div>
      </div>
    </div>
  )
}

export default Board

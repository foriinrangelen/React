import React from 'react'

const Membercard = ({ team, name }) => {
  return (
    <div className="team-item">
      <h3>{team}</h3>
      <p>{name}</p>
    </div>
  )
}

export default Membercard

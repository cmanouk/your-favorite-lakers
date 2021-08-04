import React from 'react';

const PlayerSelect = ({ currPlayer, players, setPlayerProfile }) => (
  <select
    onChange={(e) => setPlayerProfile(e.target.value)}
    className='player-select'
  >
    {players.map((p) => (
      <option key={`${p.firstName}-${p.lastName}`} value={p._id}>
        {`${p.firstName} ${p.lastName}`}
      </option>
    ))}
  </select>
)

export default PlayerSelect;
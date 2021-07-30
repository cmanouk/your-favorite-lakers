import React from 'react';
import PlayerBioLeft from './PlayerBioLeft';
import PlayerBioRight from './PlayerBioRight';

const PlayerBio = ({ player }) => {
  const { firstName, lastName } = player;
  return (
    <section className='player-bio'>
      <PlayerBioLeft firstName={firstName} lastName={lastName} />
      <PlayerBioRight player={player} />
    </section>
  )
}

export default PlayerBio;
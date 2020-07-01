import React from 'react';

const PokemonView = ({ match }) => {
  return (
    <div>{match.params.id}</div>
  );
}

export default PokemonView;

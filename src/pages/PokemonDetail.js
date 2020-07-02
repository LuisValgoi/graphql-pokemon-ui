import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

import Image from 'react-bootstrap/Image'
import { RegionImage, RegionContent, Region, RegionTitle } from '../components/Region/Region';

import ActionDetail from '../redux/Pokemon/actions/Detail';

const PokemonDetail = ({ match }) => {
  const pokemon = useSelector(state => state.pokemon.detail.item);
  const [onPokemonLoad] = useActions([(id) => ActionDetail.ON_ITEM_LOAD_REQUEST(id)], []);

  useEffect(() => {
    onPokemonLoad(match.params.id);
  }, [match.params.id]);

  return (
    <Region>
      <RegionTitle>
        <h4>{pokemon.data.name} - {pokemon.data.number}</h4>
      </RegionTitle>
      <RegionImage>
        <Image src={pokemon.data.image} alt='Pokemon' fluid />
      </RegionImage>
      <RegionContent>
        <p>auehuahueha</p>
      </RegionContent>
    </Region>
  );
}

export default PokemonDetail;

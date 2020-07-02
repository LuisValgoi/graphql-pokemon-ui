import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../hooks/useActions';

import Image from 'react-bootstrap/Image'
import { RegionImage, RegionContent, Region } from '../components/Region/Region';

import ActionDetail from '../redux/Pokemon/actions/Detail';

const PokemonDetail = ({ match }) => {
  const pokemon = useSelector(state => state.pokemon.detail.item);
  const [onPokemonLoad] = useActions([(id) => ActionDetail.ON_ITEM_LOAD_REQUEST(id)], []);

  useEffect(() => {
    onPokemonLoad(match.params.id);
  }, [match.params.id]);

  return (
    <Region>
      <RegionImage>
        <Image src={pokemon.data.image} alt='Pokemon' fluid />
      </RegionImage>
      <RegionContent>
        <h1>uehauehua</h1>
      </RegionContent>
    </Region>
  );
}

export default PokemonDetail;

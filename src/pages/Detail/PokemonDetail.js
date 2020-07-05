import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';

import NotFound from '../NotFound';
import { RegionImage, RegionContent, Region, RegionTitle } from '../../components/Region/Region';
import { RowBadges, RowEvolutions, RowInfos } from './PokemonInfo';
import Spinner from '../../components/Spinner/Spinner';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

import ActionDetail from '../../redux/Pokemon/actions/Detail';
import { hasData } from '../../util/Payload';

const PokemonDetail = ({ match }) => {
  const pokemon = useSelector(state => state.pokemon.detail.item);
  const save = useSelector(state => state.pokemon.persistence.save);

  const [onPokemonLoad] = useActions([(id) => ActionDetail.ON_ITEM_LOAD_REQUEST(id)], []);
  const [onPokemonReset] = useActions([() => ActionDetail.ON_ITEM_RESET()], []);

  useEffect(() => {
    debugger;
    onPokemonLoad(match.params.id);

    return () => onPokemonReset();
  }, [match.params.id, save, onPokemonLoad, onPokemonReset]);

  const getContent = useCallback(() => {
    return (
      <Region>
        <RegionTitle>
          <h4>{pokemon.data.name} - {pokemon.data.number} ({pokemon.data.classification})</h4>
        </RegionTitle>
        <RegionImage>
          <Image src={pokemon.data.image} alt='Pokemon' fluid />
        </RegionImage>
        <RegionContent>
          <Container>
            <RowInfos title='Informations' className='mt-2' item={pokemon.data} />
            <hr />
            <RowBadges title='Types' items={pokemon.data.types} variant='info' />
            <hr />
            <RowBadges title='Attacks' items={pokemon.data.attacks.special} variant='danger' customKey={item => item.name} customName={item => `${item.name} (${item.type}): ${item.damage}`} />
            <hr />
            <RowBadges title='Weakness' items={pokemon.data.weaknesses} variant='secondary' />
            <hr />
            <RowBadges title='Resistant' items={pokemon.data.resistant} variant='primary' />
            <hr />
            <RowEvolutions title='Evolutions' items={pokemon.data.evolutions} />
          </Container>
        </RegionContent>
      </Region>
    );
  }, [pokemon.data]);

  const getPokemonDetail = useCallback(() => {
    if (pokemon && hasData(pokemon.data)) {
      return getContent()

    } else if (pokemon && pokemon.hasFailed) {
      return <NotFound />

    } else {
      return <Spinner />
    }
  }, [getContent, pokemon]);

  return getPokemonDetail();
}

export default PokemonDetail;

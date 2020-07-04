import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';

import { RegionImage, RegionContent, Region, RegionTitle } from '../../components/Region/Region';
import { RowBadges, RowEvolutions, RowInfos } from './PokemonInfo';
import Spinner from '../../components/Spinner/Spinner';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

import BrowserURL from '../../util/BrowserURL';
import ActionDetail from '../../redux/Pokemon/actions/Detail';
import { hasData } from '../../util/Verficator';

const PokemonDetail = ({ match }) => {
  const pokemon = useSelector(state => state.pokemon.detail.item);

  const [onPokemonLoad] = useActions([(id) => ActionDetail.ON_ITEM_LOAD_REQUEST(id)], []);
  const [onPokemonReset] = useActions([() => ActionDetail.ON_ITEM_RESET()], []);

  useEffect(() => {
    onPokemonLoad(match.params.id);

    return () => onPokemonReset();
  }, [match.params.id, onPokemonLoad, onPokemonReset]);

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
    if (hasData(pokemon.data)) {
      return getContent()

    } else if (pokemon.hasFailed) {
      return <Redirect to={BrowserURL.NOT_FOUND} />

    } else {
      return <Spinner />
    }
  }, [getContent, pokemon.data, pokemon.hasFailed]);

  return getPokemonDetail();
}

export default PokemonDetail;

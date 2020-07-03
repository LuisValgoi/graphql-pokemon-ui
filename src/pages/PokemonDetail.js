import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useActions } from '../hooks/useActions';

import { RegionImage, RegionContent, Region, RegionTitle } from '../components/Region/Region';
import Spinner from '../components/Spinner/Spinner';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Error from './Error';

import ActionDetail from '../redux/Pokemon/actions/Detail';

const PokemonDetail = ({ match }) => {
  const pokemon = useSelector(state => state.pokemon.detail.item);
  const [onPokemonLoad] = useActions([(id) => ActionDetail.ON_ITEM_LOAD_REQUEST(id)], []);

  useEffect(() => {
    onPokemonLoad(match.params.id);
  }, [match.params.id]);

  const getContent = () => {
    return (
      <Region>
        <RegionTitle>
          <h4>{pokemon.data.name} - {pokemon.data.number}</h4>
        </RegionTitle>
        <RegionImage>
          <Image src={pokemon.data.image} alt='Pokemon' fluid />
        </RegionImage>
        <RegionContent>
          <Container >
            <Row>
              <Col xs={1}><h5>Types</h5></Col>
              <Col xs={11}>
                {pokemon.data.types.map(type => {
                  return <Badge key={type} className='mr-2' variant="info">{type}</Badge>
                })}
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={1}><h5>Attacks</h5></Col>
              <Col xs={11}>
                {pokemon.data.attacks.special.map(attack => {
                  return <Badge key={attack.name} pill className='mr-2' variant="danger">{attack.name} ({attack.type}): {attack.damage}</Badge>
                })}
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={1}><h5>Attacks</h5></Col>
              <Col xs={11}>
                {pokemon.data.attacks.special.map(attack => {
                  return <Badge key={attack.name} pill className='mr-2' variant="danger">{attack.name} ({attack.type}): {attack.damage}</Badge>
                })}
              </Col>
            </Row>
          </Container>
        </RegionContent>
      </Region>
    );
  };

  const getPokemonDetail = () => {
    if (pokemon.hasFailed) {
      return <Redirect to={Error} />
    } else if (!pokemon.isLoading && !pokemon.hasFailed && Object.keys(pokemon.data).length !== 0) {
      return getContent();
    } else {
      return <Spinner />
    }
  };

  return getPokemonDetail();
}

export default PokemonDetail;

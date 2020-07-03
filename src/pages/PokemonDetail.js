import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Link, useHistory } from 'react-router-dom';
import { useActions } from '../hooks/useActions';

import { RegionImage, RegionContent, Region, RegionTitle } from '../components/Region/Region';
import Spinner from '../components/Spinner/Spinner';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'

import URLProvider from '../util/URLProvider';
import BrowserURL from '../util/BrowserURL';
import ActionDetail from '../redux/Pokemon/actions/Detail';

const style = {
  row: {
    alignSelf: 'center'
  }
};

const PokemonDetail = ({ match }) => {
  const history = useHistory();
  const pokemon = useSelector(state => state.pokemon.detail.item);
  const [onPokemonLoad] = useActions([(id) => ActionDetail.ON_ITEM_LOAD_REQUEST(id)], []);

  useEffect(() => {
    onPokemonLoad(match.params.id);
  }, [match.params.id]);

  const getContent = () => {
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
            <Row className='mt-2'>
              <Col xs={12} sm={12} md={3} lg={2}><h5>Informations</h5></Col>
              <Col xs={12} sm={12} md={9} lg={10}>
                <span className='mr-2'>
                  <b>Weight: </b>{pokemon.data.weight.minimum} - {pokemon.data.weight.maximum}
                </span>
                <span className='mr-2'>
                  <b>Height: </b>{pokemon.data.height.minimum} - {pokemon.data.height.maximum}
                </span>
                <span className='mr-2'>
                  <b>Flee Rate: </b>{pokemon.data.fleeRate}
                </span>
                <span className='mr-2'>
                  <b>Max CP: </b>{pokemon.data.maxCP}
                </span>
                <span className='mr-2'>
                  <b>Max HP: </b>{pokemon.data.maxHP}
                </span>
              </Col>
            </Row>
            <hr />
            <Row className='mt-2'>
              <Col xs={2} sm={12} md={3} lg={2}><h5>Types</h5></Col>
              <Col xs={10} sm={12} md={9} lg={10}>
                {pokemon.data.types.map(type => {
                  return <Badge key={type} className='mr-2' variant="info">{type}</Badge>
                })}
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={2} sm={12} md={3} lg={2}><h5>Attacks</h5></Col>
              <Col xs={10} sm={12} md={9} lg={10}>
                {pokemon.data.attacks.special.map(attack => {
                  return <Badge key={attack.name} className='mr-2' variant="danger">{attack.name} ({attack.type}): {attack.damage}</Badge>
                })}
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={2} sm={12} md={3} lg={2}><h5>Weakness</h5></Col>
              <Col xs={10} sm={12} md={9} lg={10}>
                {pokemon.data.weaknesses.map(weakness => {
                  return <Badge key={weakness} className='mr-2' variant="secondary">{weakness}</Badge>
                })}
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={2} sm={12} md={3} lg={2}><h5>Resistant</h5></Col>
              <Col xs={10} sm={12} md={9} lg={10}>
                {pokemon.data.resistant.map(resist => {
                  return <Badge key={resist} className='mr-2' variant="primary">{resist}</Badge>
                })}
              </Col>
            </Row>
            <hr />
            <Row className='mb-2'>
              <Col xs={2} sm={12} md={3} lg={2} style={style.row}><h5>Evolutions</h5></Col>
              <Col xs={10} sm={12} md={9} lg={10}>
                {getEvolutions()}
              </Col>
            </Row>
          </Container>
        </RegionContent>
      </Region>
    );
  };

  const getEvolutions = () => {
    return (
      <>
        {pokemon.data.evolutions ? pokemon.data.evolutions.map(evolution => {
          return (
            <Link key={evolution.id} to={URLProvider.replace(BrowserURL.DETAIL, evolution.id)}>
              <Button variant='outline-primary' className='mr-2'>{evolution.name}</Button>
            </Link>
          );
        }) : (
            <Button disabled variant='outline-primary' className='mr-2'>This is the last evolution</Button>
          )}
        <Button variant='link' onClick={() => history.goBack()} className='mr-2 float-right'>Go Back</Button>
      </>
    );
  };

  const getPokemonDetail = () => {
    if (pokemon.hasFailed) {
      return <Redirect to={BrowserURL.NOT_FOUND} />
    } else if (pokemon.data && Object.keys(pokemon.data).length !== 0) {
      return getContent();
    } else {
      return <Spinner style={{ marginTop: '1rem' }} />
    }
  };

  return getPokemonDetail();
}

export default PokemonDetail;

import { createAction } from 'redux-actions';

const ON_POKEMON_LOAD_REQUEST = createAction('ON_POKEMON_LOAD_REQUEST');
const ON_POKEMON_LOAD_SUCCESS = createAction('ON_POKEMON_LOAD_SUCCESS');
const ON_POKEMON_LOAD_FAIL = createAction('ON_POKEMON_LOAD_FAIL');

export default {
  ON_POKEMON_LOAD_REQUEST,
  ON_POKEMON_LOAD_SUCCESS,
  ON_POKEMON_LOAD_FAIL
};

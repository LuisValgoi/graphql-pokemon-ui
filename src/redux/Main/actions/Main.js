import { createAction } from 'redux-actions';

const ON_POKEMON_SEARCH = createAction('ON_POKEMON_SEARCH');
const ON_POKEMON_LOAD_REQUEST = createAction('ON_POKEMON_LOAD_REQUEST');
const ON_POKEMON_LOAD_SUCCESS = createAction('ON_POKEMON_LOAD_SUCCESS');
const ON_POKEMON_LOAD_FAIL = createAction('ON_POKEMON_LOAD_FAIL');
const ON_CLOSE_FAIL_NOTIFICATION = createAction('ON_CLOSE_FAIL_NOTIFICATION');
const ON_SET_SELECTED_ITEM = createAction('ON_SET_SELECTED_ITEM');

export default {
  ON_POKEMON_SEARCH,
  ON_POKEMON_LOAD_REQUEST,
  ON_POKEMON_LOAD_SUCCESS,
  ON_POKEMON_LOAD_FAIL,
  ON_CLOSE_FAIL_NOTIFICATION,
  ON_SET_SELECTED_ITEM
};

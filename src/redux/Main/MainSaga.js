import { call, put, takeLeading, select } from 'redux-saga/effects';
import { getMainPokemons, getMainSelectedPokemon } from '../selector';

import ActionMain from './actions/Main';
import ActionMainDeleteModal from './actions/MainDeleteModal';

import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';

function* handlePokemonsLoad() {
  try {
    const url = URLProvider.getUrl('GET_POKEMONS');
    const api = () => Request.get(url);
    const { data } = yield call(api);
    yield put(ActionMain.ON_POKEMON_LOAD_SUCCESS(data.data.query._pokemonsLEhzg));
  } catch (error) {
    yield put(ActionMain.ON_POKEMON_LOAD_FAIL());
  }
}

function* handlePokemonSearch(param) {
  if (param.payload) {
    const pokemons = yield select(getMainPokemons);
    const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().trim().includes(param.payload.toLowerCase()));
    yield put(ActionMain.ON_POKEMON_LOAD_SUCCESS(filteredPokemons));
  } else {
    yield handlePokemonsLoad();
  }
}

function* handleDeletePokemon() {
  const id = yield select(getMainSelectedPokemon);
  const pokemons = yield select(getMainPokemons);
  const pokemonsLeft = pokemons.filter(pokemon => pokemon.id !== id);
  yield put(ActionMain.ON_POKEMON_LOAD_SUCCESS(pokemonsLeft));
  yield put(ActionMainDeleteModal.ON_MAIN_CLOSE_DELETE_MODAL());
  yield put(ActionMain.ON_SET_SELECTED_ITEM({}));
}

function* watchMainSagas() {
  yield takeLeading(ActionMain.ON_POKEMON_LOAD_REQUEST.toString(), handlePokemonsLoad);
  yield takeLeading(ActionMain.ON_POKEMON_SEARCH.toString(), handlePokemonSearch);
  yield takeLeading(ActionMainDeleteModal.ON_MAIN_DELETE_PROCEED.toString(), handleDeletePokemon);
}

export default watchMainSagas;

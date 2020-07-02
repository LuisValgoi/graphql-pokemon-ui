import { call, put, takeLeading, select } from 'redux-saga/effects';
import { getPokemons, getSelectedPokemon } from '../selector';

import ActionMain from './actions/Main';
import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';

function* _filterRecords(value) {
  const pokemons = yield select(getPokemons);
  const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().trim().includes(value.toLowerCase()));
  yield put(ActionMain.ON_ITEMS_LOAD_SUCCESS(filteredPokemons));
}

function* _fetchRecords() {
  const url = URLProvider.getUrl('GET_POKEMONS');
  const api = () => Request.get(url);
  const { data } = yield call(api);
  yield put(ActionMain.ON_ITEMS_LOAD_SUCCESS(data.data.query._pokemonsLEhzg));
}

function* handlePokemonsLoad(param) {
  try {
    if (param.payload) {
      yield _filterRecords(param.payload);
    } else {
      yield _fetchRecords();
    }
  } catch (error) {
    yield put(ActionMain.ON_ITEMS_LOAD_FAIL());
  }
}

function* handleDeletePokemon() {
  const pokemons = yield select(getPokemons);
  const selectedPokemon = yield select(getSelectedPokemon);
  const pokemonsLeft = pokemons.filter(pokemon => pokemon.id !== selectedPokemon.id);
  yield put(ActionMain.ON_ITEMS_LOAD_SUCCESS(pokemonsLeft));
  yield put(ActionMain.ON_DELETION_CLOSE_MODAL());
}

function* watchMainSagas() {
  yield takeLeading(ActionMain.ON_ITEMS_LOAD_REQUEST.toString(), handlePokemonsLoad);
  yield takeLeading(ActionMain.ON_DELETION_PROCEED.toString(), handleDeletePokemon);
}

export default watchMainSagas;

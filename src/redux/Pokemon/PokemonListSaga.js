import { call, put, takeLeading, select } from 'redux-saga/effects';
import { getPokemons, getSelectedPokemon } from '../selector';

import ActionList from './actions/List';
import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';

function* _filterRecords(value) {
  const pokemons = yield select(getPokemons);
  const filteredPokemons = pokemons.filter((pokemon) => pokemon.name.toLowerCase().trim().includes(value.toLowerCase()));
  yield put(ActionList.ON_ITEMS_LOAD_SUCCESS(filteredPokemons));
}

function* _fetchRecords() {
  const url = URLProvider.getUrl('GET_POKEMONS');
  const api = () => Request.get(url);
  const { data } = yield call(api);
  debugger;
  yield put(ActionList.ON_ITEMS_LOAD_SUCCESS(data.data.pokemons));
}

function* handleOnItemsLoad(param) {
  try {
    if (param.payload) {
      yield _filterRecords(param.payload);
    } else {
      yield _fetchRecords();
    }
  } catch (error) {
    yield put(ActionList.ON_ITEMS_LOAD_FAIL());
  }
}

function* handleDeletionProceed() {
  const pokemons = yield select(getPokemons);
  const selectedPokemon = yield select(getSelectedPokemon);
  const pokemonsLeft = pokemons.filter(pokemon => pokemon.id !== selectedPokemon.id);
  yield put(ActionList.ON_ITEMS_LOAD_SUCCESS(pokemonsLeft));
  yield put(ActionList.ON_DELETION_CLOSE_MODAL());
}

function* watchPokemonListSaga() {
  yield takeLeading(ActionList.ON_ITEMS_LOAD_REQUEST.toString(), handleOnItemsLoad);
  yield takeLeading(ActionList.ON_DELETION_PROCEED.toString(), handleDeletionProceed);
}

export default watchPokemonListSaga;

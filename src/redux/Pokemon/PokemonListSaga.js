import { call, put, takeLeading, select } from 'redux-saga/effects';
import { getPokemons } from '../selector';

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

function* watchPokemonListSaga() {
  yield takeLeading(ActionList.ON_ITEMS_LOAD_REQUEST.toString(), handleOnItemsLoad);
}

export default watchPokemonListSaga;

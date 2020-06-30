import { call, put, takeLeading } from 'redux-saga/effects';

import ActionMain from './actions/Main';
import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';

function* handlePokemonsLoad(params) {
  try {
    const url = URLProvider.getUrl('GET_POKEMONS');
    const api = () => Request.get(url);
    const { data } = yield call(api);
    yield put(ActionMain.ON_POKEMON_LOAD_SUCCESS(data.data.query._pokemonsLEhzg));
  } catch (error) {
    yield put(ActionMain.ON_POKEMON_LOAD_FAIL());
  }
}

function* watchMainSagas() {
  yield takeLeading(ActionMain.ON_POKEMON_LOAD_REQUEST.toString(), handlePokemonsLoad);
}

export default watchMainSagas;

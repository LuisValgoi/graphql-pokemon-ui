import { call, put, takeLeading } from 'redux-saga/effects';

import ActionDetail from './actions/Detail';
import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';

function* handleOnItemLoad(param) {
  try {
    const url = URLProvider.replace(URLProvider.getUrl('GET_POKEMON_BY_ID'), param.payload);
    const api = () => Request.get(url);
    const { data } = yield call(api);
    const filtered = data.data.query._pokemonsLEhzg.filter(pokemon => pokemon.id === param.payload)[0];
    yield put(ActionDetail.ON_ITEM_LOAD_SUCCESS(filtered));
  } catch (error) {
    yield put(ActionDetail.ON_ITEM_LOAD_FAIL());
  }
}

function* watchPokemonDetailSaga() {
  yield takeLeading(ActionDetail.ON_ITEM_LOAD_REQUEST.toString(), handleOnItemLoad);
}

export default watchPokemonDetailSaga;

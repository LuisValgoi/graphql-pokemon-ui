import { call, put, takeLeading } from 'redux-saga/effects';

import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';

import ActionDetail from './actions/Detail';

function* handleOnItemLoad(id) {
  try {
    const url = URLProvider.replace(URLProvider.getUrl('GET_POKEMON_BY_ID'), id.payload);
    const api = () => Request.get(url);
    const { data } = yield call(api);
    yield put(ActionDetail.ON_ITEM_LOAD_SUCCESS(data));
  } catch (error) {
    yield put(ActionDetail.ON_ITEM_LOAD_FAIL());
  }
}

function* watchPokemonDetailSaga() {
  yield takeLeading(ActionDetail.ON_ITEM_LOAD_REQUEST.toString(), handleOnItemLoad);
}

export default watchPokemonDetailSaga;

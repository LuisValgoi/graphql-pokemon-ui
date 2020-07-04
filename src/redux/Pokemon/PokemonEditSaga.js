import { call, put, takeLeading } from 'redux-saga/effects';

import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';
import { castResponse } from '../../util/Payload';

import ActionEdit from './actions/Edit';

function* handleOnItemLoad(id) {
  try {
    const url = URLProvider.replace(URLProvider.getUrl('GET_POKEMON_BY_ID'), id.payload);
    const api = () => Request.get(url);
    const { data } = yield call(api);
    const response = castResponse(data)
    yield put(ActionEdit.ON_ITEM_LOAD_SUCCESS(response));
  } catch (error) {
    yield put(ActionEdit.ON_ITEM_LOAD_FAIL());
  }
}

function* watchPokemonEditSaga() {
  yield takeLeading(ActionEdit.ON_ITEM_LOAD_REQUEST.toString(), handleOnItemLoad);
}

export default watchPokemonEditSaga;

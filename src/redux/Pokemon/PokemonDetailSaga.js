import { call, put, takeLeading } from 'redux-saga/effects';

import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';
import { getState } from '../../util/LocalStorage';

import ActionDetail from './actions/Detail';

function _getRecordFromLocalStorage(id) {
  const items = getState('pokemon.list.items.data');
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id && items[i].active) {
      return items[i];
    }
  }
  throw new Error('Not Found or Inactive');
}

function* _getRecordFromServer(id) {
  const url = URLProvider.replace(URLProvider.getUrl('GET_POKEMON_BY_ID'), id);
  const api = () => Request.get(url);
  const { data } = yield call(api);
  return data;
}

function* handleOnItemLoad(id) {
  try {

    if (getState('pokemon.list.items.data').length > 0) {
      const data = _getRecordFromLocalStorage(id.payload);
      yield put(ActionDetail.ON_ITEM_LOAD_SUCCESS(data));

    } else {
      const data = yield _getRecordFromServer(id.payload);
      yield put(ActionDetail.ON_ITEM_LOAD_SUCCESS(data));
    }
  } catch (error) {
    yield put(ActionDetail.ON_ITEM_LOAD_FAIL());
  }
}

function* watchPokemonDetailSaga() {
  yield takeLeading(ActionDetail.ON_ITEM_LOAD_REQUEST.toString(), handleOnItemLoad);
}

export default watchPokemonDetailSaga;

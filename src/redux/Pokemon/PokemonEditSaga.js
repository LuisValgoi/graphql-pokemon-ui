import { call, put, takeLeading } from 'redux-saga/effects';

import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';
import { castPokemonResponse } from '../../util/Payload';
import { getState } from '../../util/LocalStorage';

import ActionEdit from './actions/Edit';

function _isInLocalStorageList() {
  return getState('pokemon.list.items.data').length > 0;
}

function _isInLocalStorageDetail(id) {
  return (Object.keys(getState('pokemon.detail.item.data')).length !== 0 && getState('pokemon.detail.item.data.id') === id);
}

function _getRecordFromLocalStorageList(id) {
  const items = getState('pokemon.list.items.data');
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === id && items[i].active) {
      const dataCasted = castPokemonResponse(items[i]);
      return dataCasted;
    }
  }
  throw new Error('Not Found or Inactive');
}

function* _getRecordFromServer(id) {
  const url = URLProvider.replace(URLProvider.getUrl('GET_POKEMON_BY_ID'), id);
  const api = () => Request.get(url);
  const { data } = yield call(api);
  const dataCasted = castPokemonResponse(data)
  return dataCasted;
}

function* handleOnItemLoad(id) {
  try {
    if (_isInLocalStorageList()) {
      const data = _getRecordFromLocalStorageList(id.payload);
      yield put(ActionEdit.ON_ITEM_LOAD_SUCCESS(data));

    } else if (_isInLocalStorageDetail(id.payload)) {
      const data = getState('pokemon.detail.item.data');
      yield put(ActionEdit.ON_ITEM_LOAD_SUCCESS(data));

    } else {
      const data = yield _getRecordFromServer(id.payload);
      yield put(ActionEdit.ON_ITEM_LOAD_SUCCESS(data));
    }
  } catch (error) {
    yield put(ActionEdit.ON_ITEM_LOAD_FAIL());
  }
}

function* watchPokemonEditSaga() {
  yield takeLeading(ActionEdit.ON_ITEM_LOAD_REQUEST.toString(), handleOnItemLoad);
}

export default watchPokemonEditSaga;

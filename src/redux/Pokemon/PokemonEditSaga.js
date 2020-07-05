import { call, put, takeLeading } from 'redux-saga/effects';

import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';
import { castPokemonResponse } from '../../util/Payload';
import { getState } from '../../util/LocalStorage';

import ActionEdit from './actions/Edit';

function _getRecordFromLocalStorage(id) {
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
    if (getState('pokemon.list.items.data').length > 0) {
      const data = _getRecordFromLocalStorage(id.payload);
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

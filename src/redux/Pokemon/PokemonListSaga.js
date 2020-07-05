import { call, put, takeLeading, delay } from 'redux-saga/effects';

import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';
import { getState } from '../../util/LocalStorage';

import ActionList from './actions/List';

function _getItemsWithProperties(items) {
  for (let i = 0; i < items.length; i++) {
    items[i]['active'] = true;
    items[i]['shown'] = true;
  }
  return items;
};

function _getItemsAsShown(items) {
  for (let i = 0; i < items.length; i++) {
    items[i]['shown'] = true;
  }
  return items;
};

function _getItemsAsNotShownWhenDifferentFromQueryParam(items, queryParam) {
  for (let i = 0; i < items.length; i++) {
    debugger;
    if (!items[i].name.toLowerCase().includes(queryParam.toLowerCase())) {
      items[i]['shown'] = false;
    } else {
      items[i]['shown'] = true;
    }
  }
  return items;
}

function* _getRecordsFromServer(queryParam) {
  const url = URLProvider.getUrl('GET_POKEMONS');
  const api = () => Request.get(url, queryParam ? { params: { query: queryParam } } : null);
  const { data } = yield call(api);
  const items = data.data.pokemons;
  return _getItemsWithProperties(items);
}

function _getRecordsFromLocalStorage(queryParam) {
  const items = getState('pokemon.list.items.data');
  if (!queryParam) {
    return _getItemsAsShown(items);
  }
  return _getItemsAsNotShownWhenDifferentFromQueryParam(items, queryParam);
}

function* handleOnItemsLoad(param) {
  try {
    const queryParam = param.payload;
    if (queryParam) yield delay(500)

    if (getState('pokemon.list.items.data').length > 0) {
      const data = _getRecordsFromLocalStorage(queryParam);
      yield put(ActionList.ON_ITEMS_LOAD_SUCCESS(data));

    } else {
      const data = yield _getRecordsFromServer(queryParam);
      yield put(ActionList.ON_ITEMS_LOAD_SUCCESS(data));
    }
  } catch (error) {
    yield put(ActionList.ON_ITEMS_LOAD_FAIL());
  }
}

function* watchPokemonListSaga() {
  yield takeLeading(ActionList.ON_ITEMS_LOAD_REQUEST.toString(), handleOnItemsLoad);
}

export default watchPokemonListSaga;

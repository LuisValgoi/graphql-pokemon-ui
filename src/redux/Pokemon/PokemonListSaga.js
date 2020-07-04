import { call, put, takeLeading, delay } from 'redux-saga/effects';

import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';

import ActionList from './actions/List';

function* handleOnItemsLoad(param) {
  try {
    const queryParam = param.payload;
    const urlParams = queryParam ? { params: { query: queryParam } } : null;
    if (urlParams) yield delay(500) // debounce

    const url = URLProvider.getUrl('GET_POKEMONS');
    const api = () => Request.get(url, urlParams);
    const { data } = yield call(api);
    yield put(ActionList.ON_ITEMS_LOAD_SUCCESS(data.data.pokemons));
  } catch (error) {
    yield put(ActionList.ON_ITEMS_LOAD_FAIL());
  }
}

function* watchPokemonListSaga() {
  yield takeLeading(ActionList.ON_ITEMS_LOAD_REQUEST.toString(), handleOnItemsLoad);
}

export default watchPokemonListSaga;

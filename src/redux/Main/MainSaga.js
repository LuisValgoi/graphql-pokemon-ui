import { call, put, takeLeading, select } from 'redux-saga/effects';

import ActionMain from './actions/Main';
import ActionMainLog from './actions/MainLog';
import ActionMainNotification from './actions/MainNotification';

import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';
import { getMainLogRequests, getMainScrollAmount } from '../selector';

function* _handleStopRequest() {
  yield put(ActionMainNotification.ON_POKEMON_LOAD_LIMIT_NOTIFY_CUSTOM({ title: 'Warning', message: 'You have reached the maximun of items' }));
  yield put(ActionMain.ON_POKEMON_LOAD_STOP());
}

function* _handleContinueRequest(pageToSent) {
  const url = URLProvider.getUrl('GET_POKEMONS');
  const api = () => Request.get(url, { params: { page: pageToSent } });
  const { data } = yield call(api);

  yield put(ActionMainLog.ON_LOG_MAIN_REQUESTS(pageToSent));
  yield put(ActionMain.ON_POKEMON_LOAD_SUCCESS_REQUEST(data.data.query._pokemonsLEhzg));
}

function* handlePokemonsLoad() {
  try {
    const scrollAmount = yield select(getMainScrollAmount);
    const pagesSentHistory = yield select(getMainLogRequests);
    const lastPageSentHistory = pagesSentHistory.length > 0 ? pagesSentHistory[pagesSentHistory.length - 1] : 0;
    const pageToSent = pagesSentHistory.length > 0 ? lastPageSentHistory + 1 : 0;

    if (lastPageSentHistory >= scrollAmount) {
      yield _handleStopRequest();
    } else {
      yield _handleContinueRequest(pageToSent);
    }

  } catch (error) {
    yield put(ActionMain.ON_POKEMON_LOAD_FAIL());
  }
}

function* watchMainSagas() {
  yield takeLeading(ActionMain.ON_POKEMON_LOAD_REQUEST.toString(), handlePokemonsLoad);
}

export default watchMainSagas;

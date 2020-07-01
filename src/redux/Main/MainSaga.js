import { call, put, takeLeading, select } from 'redux-saga/effects';
import { getMainLogRequests, getMainScrollAmount, getMainPokemons, getMainSelectedPokemon } from '../selector';

import ActionMain from './actions/Main';
import ActionMainLog from './actions/MainLog';
import ActionMainNotification from './actions/MainNotification';
import ActionMainDeleteModal from './actions/MainDeleteModal';

import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';

function* _handleStopRequest() {
  yield put(ActionMainNotification.ON_POKEMON_LOAD_LIMIT_NOTIFY_CUSTOM({ title: 'Oh Snap!', message: 'You have reached the maximum of items' }));
  yield put(ActionMain.ON_POKEMON_LOAD_STOP());
}

function* _handleContinueRequest(pageToSent) {
  const url = URLProvider.getUrl('GET_POKEMONS');
  const api = () => Request.get(url, { params: { page: pageToSent } });
  const { data } = yield call(api);

  yield put(ActionMainLog.ON_LOG_MAIN_REQUESTS(pageToSent));
  yield put(ActionMain.ON_POKEMON_LOAD_SUCCESS_CONCAT(data.data.query._pokemonsLEhzg));
}

function* handlePokemonsLoad() {
  try {
    const scrollAmountLimit = yield select(getMainScrollAmount);
    const pagesSentHistory = yield select(getMainLogRequests);
    const lastPageSentHistory = pagesSentHistory.length > 0 ? pagesSentHistory[pagesSentHistory.length - 1] : 0;
    const pageToSent = pagesSentHistory.length > 0 ? lastPageSentHistory + 1 : 0;

    if (lastPageSentHistory >= scrollAmountLimit) {
      yield _handleStopRequest();
    } else {
      yield _handleContinueRequest(pageToSent);
    }

  } catch (error) {
    yield put(ActionMain.ON_POKEMON_LOAD_FAIL());
  }
}

function* handleDeletePokemon() {
  const id = yield select(getMainSelectedPokemon);
  const pokemons = yield select(getMainPokemons);
  const pokemonsLeft = pokemons.filter(pokemon => pokemon.id !== id);
  yield put(ActionMain.ON_POKEMON_LOAD_SUCCESS_REPLACE(pokemonsLeft));
  yield put(ActionMainDeleteModal.ON_MAIN_CLOSE_DELETE_MODAL());
  yield put(ActionMain.ON_SET_SELECTED_ITEM({}));
}

function* watchMainSagas() {
  yield takeLeading(ActionMain.ON_POKEMON_LOAD_REQUEST.toString(), handlePokemonsLoad);
  yield takeLeading(ActionMainDeleteModal.ON_MAIN_DELETE_PROCEED.toString(), handleDeletePokemon);
}

export default watchMainSagas;

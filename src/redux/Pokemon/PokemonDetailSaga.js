import { call, put, takeLeading, select } from 'redux-saga/effects';
import { getPokemons, getSelectedPokemon } from '../selector';

import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';

import ActionModal from '../ViewSettings/actions/Modal';
import ActionDetail from './actions/Detail';
import ActionList from './actions/List';

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

function* handleOnItemDelete() {
  const pokemons = yield select(getPokemons);
  const selectedPokemon = yield select(getSelectedPokemon);
  const pokemonsLeft = pokemons.filter(pokemon => pokemon.id !== selectedPokemon.id);
  yield put(ActionList.ON_ITEMS_LOAD_SUCCESS(pokemonsLeft));
  yield put(ActionModal.ON_CLOSE_MODAL());
}

function* watchPokemonDetailSaga() {
  yield takeLeading(ActionDetail.ON_ITEM_LOAD_REQUEST.toString(), handleOnItemLoad);
  yield takeLeading(ActionDetail.ON_ITEM_DELETE.toString(), handleOnItemDelete);
}

export default watchPokemonDetailSaga;

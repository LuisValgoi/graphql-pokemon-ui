import { call, put, takeLeading, select } from 'redux-saga/effects';
import { getPokemons, getSelectedPokemon } from '../selector';

import Request from '../../util/Request';
import URLProvider from '../../util/URLProvider';

import ActionModal from '../ViewSettings/actions/Modal';
import ActionDetail from './actions/Detail';
import ActionList from './actions/List';

function* handleOnItemLoad(param) {
  try {
    const url = URLProvider.replace(URLProvider.getUrl('GET_POKEMON_BY_ID'), param.payload);
    const api = () => Request.get(url);
    const { data } = yield call(api);
    const filtered = data.data.pokemons.filter(pokemon => pokemon.id === param.payload)[0];

    if (!filtered) {
      throw Error();
    } else {
      yield put(ActionDetail.ON_ITEM_LOAD_SUCCESS(filtered));
    }
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

import { put, takeLeading, select } from 'redux-saga/effects';
import { getPokemons, getSelectedPokemon } from '../selector';

import ActionPersistence from './actions/Persistence';
import ActionModal from '../ViewSettings/actions/Modal';
import ActionList from './actions/List';

function* handleOnItemDelete() {
  const pokemons = yield select(getPokemons);
  const selectedPokemon = yield select(getSelectedPokemon);
  const pokemonsLeft = pokemons.filter(pokemon => pokemon.id !== selectedPokemon.id);
  yield put(ActionList.ON_ITEMS_LOAD_SUCCESS(pokemonsLeft));
  yield put(ActionModal.ON_CLOSE_MODAL());
}

function* handleOnItemSave(item) {
  alert(JSON.stringify(item.payload));
}

function* watchPersistenceSaga() {
  yield takeLeading(ActionPersistence.ON_ITEM_DELETE.toString(), handleOnItemDelete);
  yield takeLeading(ActionPersistence.ON_ITEM_SAVE.toString(), handleOnItemSave);
}

export default watchPersistenceSaga;

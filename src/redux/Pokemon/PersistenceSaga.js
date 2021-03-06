import { put, takeLeading, select, take, delay } from 'redux-saga/effects';
import { getPokemons, getSelectedPokemon } from '../selector';

import ActionPersistence from './actions/Persistence';
import ActionModal from '../ViewSettings/actions/Modal';
import ActionList from './actions/List';
import ActionEdit from './actions/Edit';
import ActionDetail from './actions/Detail';

import { castPokemonPayload } from '../../util/Payload';

function* handleOnItemDelete() {
  try {
    const pokemons = yield select(getPokemons);
    const selectedPokemon = yield select(getSelectedPokemon);
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].id === selectedPokemon.id) {
        pokemons[i]['active'] = false;
      }
    }

    yield put(ActionPersistence.ON_ITEM_DELETE_SUCCESS());
    yield put(ActionList.ON_ITEMS_LOAD_SUCCESS(pokemons));
    yield put(ActionModal.ON_CLOSE_MODAL());
  } catch (error) {
    yield put(ActionPersistence.ON_ITEM_DELETE_FAIL());
  }
}


function* handleOnItemSave(item) {
  try {
    yield put(ActionList.ON_ITEMS_LOAD_REQUEST());
    yield take(ActionList.ON_ITEMS_LOAD_SUCCESS.toString())

    const pokemons = yield select(getPokemons);
    const editedPokemon = castPokemonPayload(item.payload);
    const pokemonsEdited = pokemons.map(pokemon => pokemon.id === editedPokemon.id ? editedPokemon : pokemon);

    yield put(ActionList.ON_ITEMS_LOAD_SUCCESS(pokemonsEdited));
    yield put(ActionDetail.ON_ITEM_LOAD_SUCCESS(editedPokemon));
    yield put(ActionEdit.ON_ITEM_LOAD_SUCCESS(editedPokemon));
    yield delay(1000)
    yield put(ActionPersistence.ON_ITEM_SAVE_SUCCESS());
  } catch (error) {
    yield put(ActionPersistence.ON_ITEM_SAVE_FAIL());
  }
}

function* watchPersistenceSaga() {
  yield takeLeading(ActionPersistence.ON_ITEM_DELETE.toString(), handleOnItemDelete);
  yield takeLeading(ActionPersistence.ON_ITEM_SAVE.toString(), handleOnItemSave);
}

export default watchPersistenceSaga;

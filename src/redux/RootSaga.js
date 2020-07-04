import { all } from 'redux-saga/effects';

import watchPokemonListSaga from './Pokemon/PokemonListSaga';
import watchPokemonDetailSaga from './Pokemon/PokemonDetailSaga';
import watchPokemonEditSaga from './Pokemon/PokemonEditSaga';

export default function* rootSaga() {
  yield all([
    watchPokemonListSaga(),
    watchPokemonDetailSaga(),
    watchPokemonEditSaga()
  ]);
}

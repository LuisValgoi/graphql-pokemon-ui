import { all } from 'redux-saga/effects';

import watchPokemonListSaga from './Pokemon/PokemonListSaga';
import watchPokemonDetailSaga from './Pokemon/PokemonDetailSaga';

export default function* rootSaga() {
  yield all([
    watchPokemonListSaga(),
    watchPokemonDetailSaga()
  ]);
}

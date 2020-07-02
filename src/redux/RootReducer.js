import { combineReducers } from 'redux';

import PokemonListReducer from './Pokemon/reducers/List';
import PokemonDetailReducer from './Pokemon/reducers/Detail';

export default combineReducers({
  pokemon: combineReducers({
    list: PokemonListReducer,
    detail: PokemonDetailReducer
  })
});

import { handleActions } from 'redux-actions';

import ActionMain from '../actions/Main';

const INITIAL_STATE = {
  pokemons: [],
  hasFailed: false,
  isLoading: false
};

const reducer = handleActions(
  {
    [ActionMain.ON_POKEMON_LOAD_REQUEST]: state => {
      return {
        ...state,
        hasFailed: false,
        isLoading: true
      };
    },
    [ActionMain.ON_POKEMON_LOAD_SUCCESS]: (state, action) => {
      return {
        ...state,
        hasFailed: false,
        isLoading: false,
        pokemons: action.payload
      };
    },
    [ActionMain.ON_POKEMON_LOAD_FAIL]: state => {
      return {
        ...state,
        hasFailed: true,
        isLoading: false,
        pokemons: []
      };
    }
  },
  INITIAL_STATE
);

export default reducer;

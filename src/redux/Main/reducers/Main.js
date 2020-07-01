import { handleActions } from 'redux-actions';

import ActionMain from '../actions/Main';

const INITIAL_STATE = {
  pokemons: [],
  hasFailed: false,
  isLoading: false,
  scrollAmount: 1
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
    [ActionMain.ON_POKEMON_LOAD_STOP]: state => {
      return {
        ...state,
        isLoading: false
      };
    },
    [ActionMain.ON_POKEMON_LOAD_SUCCESS_REQUEST]: (state, action) => {
      return {
        ...state,
        hasFailed: false,
        isLoading: false,
        pokemons: state.pokemons.concat(action.payload)
      };
    },
    [ActionMain.ON_POKEMON_LOAD_FAIL]: state => {
      return {
        ...state,
        hasFailed: true,
        isLoading: false,
        pokemons: []
      };
    },
    [ActionMain.ON_SET_SCROLL_AMOUNT_LIST]: (state, action) => {
      return {
        ...state,
        scrollAmount: action.payload
      };
    }
  },
  INITIAL_STATE
);

export default reducer;

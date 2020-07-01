import { handleActions } from 'redux-actions';

import ActionMain from '../actions/Main';

const INITIAL_STATE = {
  pokemons: [],
  selectedItem: {},
  hasFailed: false,
  isLoading: false,
  scrollAmount: 1,
};

const reducer = handleActions(
  {
    [ActionMain.ON_SET_SCROLL_AMOUNT_LIST]: (state, action) => {
      return {
        ...state,
        scrollAmount: action.payload
      };
    },
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
    [ActionMain.ON_POKEMON_LOAD_SUCCESS_CONCAT]: (state, action) => {
      for (let i = 0; i < action.payload.length; i++) {
        action.payload[i].id = `${Date.now()}=${action.payload[i].id}`;
      }
      return {
        ...state,
        pokemons: state.pokemons.concat(action.payload),
        hasFailed: false,
        isLoading: false
      };
    },
    [ActionMain.ON_POKEMON_LOAD_SUCCESS_REPLACE]: (state, action) => {
      return {
        ...state,
        pokemons: action.payload,
        hasFailed: false,
        isLoading: false
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
    [ActionMain.ON_SET_SELECTED_ITEM]: (state, action) => {
      return {
        ...state,
        selectedItem: action.payload
      }
    }
  },
  INITIAL_STATE
);

export default reducer;

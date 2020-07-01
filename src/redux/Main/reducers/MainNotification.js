import { handleActions } from 'redux-actions';

import ActionMainNotification from '../actions/MainNotification';

const INITIAL_STATE = {
  shown: false,
  title: '',
  message: ''
};

const reducer = handleActions(
  {
    [ActionMainNotification.ON_POKEMON_LOAD_LIMIT_NOTIFY]: (state, action) => {
      return {
        ...state,
        shown: action.payload
      };
    },
    [ActionMainNotification.ON_POKEMON_LOAD_LIMIT_NOTIFY_CUSTOM]: (state, action) => {
      return {
        ...state,
        shown: true,
        title: action.payload.title,
        message: action.payload.message
      };
    }
  },
  INITIAL_STATE
);

export default reducer;

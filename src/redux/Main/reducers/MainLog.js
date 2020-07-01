import { handleActions } from 'redux-actions';

import ActionMainLog from '../actions/MainLog';

const INITIAL_STATE = {
  pages: []
};

const reducer = handleActions(
  {
    [ActionMainLog.ON_LOG_MAIN_REQUESTS]: (state, action) => {
      return {
        ...state,
        pages: state.pages.concat(action.payload)
      };
    },
    [ActionMainLog.ON_CLEAR_LOG_MAIN_REQUESTS]: (state, action) => {
      return {
        ...state,
        pages: []
      };
    }
  },
  INITIAL_STATE
);

export default reducer;

import { handleActions } from 'redux-actions';

import ActionModal from '../actions/Modal';

const INITIAL_STATE = {
  shown: false
};

const reducer = handleActions(
  {
    [ActionModal.ON_SHOW_MODAL]: state => {
      return {
        ...state,
        shown: true
      };
    },
    [ActionModal.ON_CLOSE_MODAL]: state => {
      return {
        ...state,
        shown: false
      };
    }
  },
  INITIAL_STATE
);

export default reducer;

import { handleActions } from 'redux-actions';

import ActionMain from '../actions/MainDeleteModal';

const INITIAL_STATE = {
  shown: false,
  title: 'Warning',
  body: 'Do you want to delete this item?'
};

const reducer = handleActions(
  {
    [ActionMain.ON_MAIN_SHOW_DELETE_MODAL]: state => {
      return {
        ...state,
        shown: true
      };
    },
    [ActionMain.ON_MAIN_CLOSE_DELETE_MODAL]: state => {
      return {
        ...state,
        shown: false
      };
    }
  },
  INITIAL_STATE
);

export default reducer;

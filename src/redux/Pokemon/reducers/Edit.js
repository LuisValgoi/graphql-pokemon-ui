import { handleActions } from 'redux-actions';

import ActionEdit from '../actions/Edit';

const INITIAL_STATE = {
  item: {
    data: {},
    hasFailed: false,
    isLoading: false
  }
};

const reducer = handleActions(
  {
    [ActionEdit.ON_ITEM_LOAD_REQUEST]: state => {
      return {
        ...state,
        item: {
          data: state.item.data,
          hasFailed: false,
          isLoading: true
        }
      };
    },
    [ActionEdit.ON_ITEM_LOAD_SUCCESS]: (state, action) => {
      return {
        ...state,
        item: {
          data: action.payload,
          hasFailed: false,
          isLoading: false
        }
      };
    },
    [ActionEdit.ON_ITEM_LOAD_FAIL]: state => {
      return {
        ...state,
        item: {
          data: {},
          hasFailed: true,
          isLoading: false
        }
      };
    },
    [ActionEdit.ON_ITEM_RESET]: state => {
      return {
        ...state,
        INITIAL_STATE
      };
    }
  },
  INITIAL_STATE
);

export default reducer;

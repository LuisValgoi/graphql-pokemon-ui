import { handleActions } from 'redux-actions';

import ActionDetail from '../actions/Detail';

const INITIAL_STATE = {
  item: {
    data: {},
    hasFailed: false,
    isLoading: false
  }
};

const reducer = handleActions(
  {
    [ActionDetail.ON_ITEM_LOAD_REQUEST]: state => {
      return {
        ...state,
        item: {
          data: state.item.data,
          hasFailed: false,
          isLoading: true
        }
      };
    },
    [ActionDetail.ON_ITEM_LOAD_SUCCESS]: (state, action) => {
      return {
        ...state,
        item: {
          data: action.payload,
          hasFailed: false,
          isLoading: false
        }
      };
    },
    [ActionDetail.ON_ITEM_LOAD_FAIL]: state => {
      return {
        ...state,
        item: {
          data: {},
          hasFailed: true,
          isLoading: false
        }
      };
    },
    [ActionDetail.ON_ITEM_RESET]: state => {
      return INITIAL_STATE;
    }
  },
  INITIAL_STATE
);

export default reducer;

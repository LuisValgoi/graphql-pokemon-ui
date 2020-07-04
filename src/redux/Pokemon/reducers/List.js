import { handleActions } from 'redux-actions';

import ActionList from '../actions/List';

const INITIAL_STATE = {
  items: {
    data: [],
    hasFailed: false,
    isLoading: false
  }
};

const reducer = handleActions(
  {
    [ActionList.ON_ITEMS_LOAD_REQUEST]: state => {
      return {
        ...state,
        items: {
          data: state.items.data,
          hasFailed: false,
          isLoading: true
        }
      };
    },
    [ActionList.ON_ITEMS_LOAD_SUCCESS]: (state, action) => {
      return {
        ...state,
        items: {
          data: action.payload,
          hasFailed: false,
          isLoading: false
        }
      };
    },
    [ActionList.ON_ITEMS_LOAD_FAIL]: state => {
      return {
        ...state,
        items: {
          data: [],
          hasFailed: true,
          isLoading: false
        }
      };
    },
    [ActionList.ON_CLOSE_ERROR_LOAD_NOTIFICATION]: state => {
      return {
        ...state,
        items: {
          data: state.items.data,
          hasFailed: false,
          isLoading: state.items.isLoading
        }
      }
    }
  },
  INITIAL_STATE
);

export default reducer;

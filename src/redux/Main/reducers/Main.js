import { handleActions } from 'redux-actions';

import ActionMain from '../actions/Main';

const INITIAL_STATE = {
  items: {
    data: [],
    hasFailed: false,
    isLoading: false
  },
  item: {
    data: {}
  },
  deletion: {
    modalShown: false
  }
};

const reducer = handleActions(
  {
    [ActionMain.ON_ITEMS_LOAD_REQUEST]: state => {
      return {
        ...state,
        items: {
          data: state.items.data,
          hasFailed: false,
          isLoading: true
        }
      };
    },
    [ActionMain.ON_ITEMS_LOAD_SUCCESS]: (state, action) => {
      return {
        ...state,
        items: {
          data: action.payload,
          hasFailed: false,
          isLoading: false
        }
      };
    },
    [ActionMain.ON_ITEMS_LOAD_FAIL]: state => {
      return {
        ...state,
        items: {
          data: [],
          hasFailed: true,
          isLoading: false
        }
      };
    },
    [ActionMain.ON_DELETION_SHOW_MODAL]: (state, action) => {
      return {
        ...state,
        item: {
          data: action.payload
        },
        deletion: {
          modalShown: true
        }
      }
    },
    [ActionMain.ON_DELETION_CLOSE_MODAL]: state => {
      return {
        ...state,
        item: {
          data: {}
        },
        deletion: {
          modalShown: false
        }
      }
    },
    [ActionMain.ON_CLOSE_FAIL_NOTIFICATION]: state => {
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

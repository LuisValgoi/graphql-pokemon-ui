import { handleActions } from 'redux-actions';

import ActionPersistence from '../actions/Persistence';

const INITIAL_STATE = {
  delete: {
    isLoading: false,
    hasFailed: false
  },
  save: {
    isLoading: false,
    hasFailed: false
  }
};

const reducer = handleActions(
  {
    [ActionPersistence.ON_ITEM_LOAD_REQUEST]: state => {
      return {
        ...state,
        item: {
          data: state.item.data,
          hasFailed: false,
          isLoading: true
        }
      };
    }
  },
  INITIAL_STATE
);

export default reducer;

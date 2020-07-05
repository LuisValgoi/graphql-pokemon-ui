import { handleActions } from 'redux-actions';

import ActionPersistence from '../actions/Persistence';

const INITIAL_STATE = {
  delete: {
    isLoading: false,
    hasFailed: false,
    hasSucced: false
  },
  save: {
    isLoading: false,
    hasFailed: false,
    hasSucced: false
  }
};

const reducer = handleActions(
  {
    [ActionPersistence.ON_ITEM_DELETE]: state => {
      return {
        ...state,
        delete: {
          isLoading: true,
          hasFailed: false,
          hasSucced: false
        }
      };
    },
    [ActionPersistence.ON_ITEM_DELETE_SUCCESS]: state => {
      return {
        ...state,
        delete: {
          isLoading: false,
          hasFailed: false,
          hasSucced: true
        }
      };
    },
    [ActionPersistence.ON_ITEM_DELETE_FAIL]: state => {
      return {
        ...state,
        delete: {
          isLoading: false,
          hasFailed: true,
          hasSucced: false
        }
      };
    },
    [ActionPersistence.ON_ITEM_SAVE]: state => {
      return {
        ...state,
        save: {
          isLoading: true,
          hasFailed: false,
          hasSucced: false
        }
      };
    },
    [ActionPersistence.ON_ITEM_SAVE_SUCCESS]: state => {
      return {
        ...state,
        save: {
          isLoading: false,
          hasFailed: false,
          hasSucced: true
        }
      };
    },
    [ActionPersistence.ON_ITEM_SAVE_FAIL]: state => {
      return {
        ...state,
        save: {
          isLoading: false,
          hasFailed: true,
          hasSucced: false
        }
      };
    },
    [ActionPersistence.ON_PERSISTENCE_RESET]: state => {
      return {
        ...state,
        delete: {
          isLoading: false,
          hasFailed: false,
          hasSucced: false
        },
        save: {
          isLoading: false,
          hasFailed: false,
          hasSucced: false
        }
      };
    }
  },
  INITIAL_STATE
);

export default reducer;

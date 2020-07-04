import { handleActions } from 'redux-actions';

import ActionNotification from '../actions/Notification';

const INITIAL_STATE = {
  isShown: false,
  isClosedForever: false
};

const reducer = handleActions(
  {
    [ActionNotification.ON_NOTIFICATION_SHOW]: state => {
      return {
        ...state,
        isShown: true,
        isClosedForever: false
      };
    },
    [ActionNotification.ON_CLOSE_NOTIFICATION]: state => {
      return {
        ...state,
        isShown: false,
        isClosedForever: false
      }
    },
    [ActionNotification.ON_NOTIFICATION_CLOSE_FOREVER]: state => {
      return {
        ...state,
        isShown: false,
        isClosedForever: true
      }
    }
  },
  INITIAL_STATE
);

export default reducer;

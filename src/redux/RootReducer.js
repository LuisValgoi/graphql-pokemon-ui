import { combineReducers } from 'redux';

import MainReducer from './Main/reducers/Main';
import MainLogReducer from './Main/reducers/MainLog';
import MainNotificationReducer from './Main/reducers/MainNotification';
import MainDeleteModalReducer from './Main/reducers/MainDeleteModal';

export default combineReducers({
  main: combineReducers({
    data: MainReducer,
    log: MainLogReducer,
    notification: MainNotificationReducer,
    delete: MainDeleteModalReducer
  })
});

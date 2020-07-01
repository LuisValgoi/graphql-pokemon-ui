import { combineReducers } from 'redux';

import MainReducer from './Main/reducers/Main';
import MainDeleteModalReducer from './Main/reducers/MainDeleteModal';

export default combineReducers({
  main: combineReducers({
    data: MainReducer,
    delete: MainDeleteModalReducer
  })
});

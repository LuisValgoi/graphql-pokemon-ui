import { combineReducers } from 'redux';

import MainReducer from '../pages/Main/reducers/Main';

export default combineReducers({
  main: MainReducer
});

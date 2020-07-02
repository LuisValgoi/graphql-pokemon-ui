import { combineReducers } from 'redux';

import MainReducer from './Main/reducers/Main';

export default combineReducers({
  main: MainReducer
});

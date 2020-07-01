import { createAction } from 'redux-actions';

const ON_CLEAR_LOG_MAIN_REQUESTS = createAction('ON_CLEAR_LOG_MAIN_REQUESTS');
const ON_LOG_MAIN_REQUESTS = createAction('ON_LOG_MAIN_REQUESTS');

export default {
  ON_CLEAR_LOG_MAIN_REQUESTS,
  ON_LOG_MAIN_REQUESTS
};

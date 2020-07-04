import { createAction } from 'redux-actions';

const ON_ITEMS_LOAD_REQUEST = createAction('ON_ITEMS_LOAD_REQUEST');
const ON_ITEMS_LOAD_SUCCESS = createAction('ON_ITEMS_LOAD_SUCCESS');
const ON_ITEMS_LOAD_FAIL = createAction('ON_ITEMS_LOAD_FAIL');
const ON_ITEMS_LOAD_FAIL_RESET = createAction('ON_ITEMS_LOAD_FAIL_RESET');

export default {
  ON_ITEMS_LOAD_REQUEST,
  ON_ITEMS_LOAD_SUCCESS,
  ON_ITEMS_LOAD_FAIL,
  ON_ITEMS_LOAD_FAIL_RESET,
};

import { createAction } from 'redux-actions';

const ON_ITEM_LOAD_REQUEST = createAction('ON_ITEM_LOAD_REQUEST');
const ON_ITEM_LOAD_SUCCESS = createAction('ON_ITEM_LOAD_SUCCESS');
const ON_ITEM_LOAD_FAIL = createAction('ON_ITEM_LOAD_FAIL');

export default {
  ON_ITEM_LOAD_REQUEST,
  ON_ITEM_LOAD_SUCCESS,
  ON_ITEM_LOAD_FAIL
};
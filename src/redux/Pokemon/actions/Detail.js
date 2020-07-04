import { createAction } from 'redux-actions';

const ON_ITEM_LOAD_REQUEST = createAction('ON_DETAIL_ITEM_LOAD_REQUEST');
const ON_ITEM_LOAD_SUCCESS = createAction('ON_DETAIL_ITEM_LOAD_SUCCESS');
const ON_ITEM_LOAD_FAIL = createAction('ON_DETAIL_ITEM_LOAD_FAIL');

const ON_ITEM_RESET = createAction('ON_DETAIL_ITEM_RESET');
const ON_ITEM_SET = createAction('ON_DETAIL_ITEM_SET');

export default {
  ON_ITEM_LOAD_REQUEST,
  ON_ITEM_LOAD_SUCCESS,
  ON_ITEM_LOAD_FAIL,
  ON_ITEM_RESET,
  ON_ITEM_SET
};

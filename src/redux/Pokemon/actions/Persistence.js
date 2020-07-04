import { createAction } from 'redux-actions';

const ON_ITEM_DELETE = createAction('ON_PERSISTENCE_ITEM_DELETE');
const ON_ITEM_SAVE = createAction('ON_PERSISTENCE_ITEM_SAVE');

export default {
  ON_ITEM_DELETE,
  ON_ITEM_SAVE
};

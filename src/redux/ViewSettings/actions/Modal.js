import { createAction } from "redux-actions";

const ON_SHOW_MODAL = createAction('ON_SHOW_MODAL');
const ON_CLOSE_MODAL = createAction('ON_CLOSE_MODAL');

export default {
  ON_SHOW_MODAL,
  ON_CLOSE_MODAL
}

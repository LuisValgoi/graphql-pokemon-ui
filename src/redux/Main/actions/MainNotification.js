import { createAction } from 'redux-actions';

const ON_POKEMON_LOAD_LIMIT_NOTIFY = createAction('ON_POKEMON_LOAD_LIMIT_NOTIFY');
const ON_POKEMON_LOAD_LIMIT_NOTIFY_CUSTOM = createAction('ON_POKEMON_LOAD_LIMIT_NOTIFY_CUSTOM');

export default {
  ON_POKEMON_LOAD_LIMIT_NOTIFY,
  ON_POKEMON_LOAD_LIMIT_NOTIFY_CUSTOM
};

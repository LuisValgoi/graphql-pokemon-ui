import { combineReducers } from 'redux';

import NotificationReducer from './ViewSettings/reducers/Notification';
import PokemonListReducer from './Pokemon/reducers/List';
import PokemonDetailReducer from './Pokemon/reducers/Detail';

export default combineReducers({
  pokemon: combineReducers({
    list: PokemonListReducer,
    detail: PokemonDetailReducer
  }),
  viewSettings: combineReducers({
    notification: NotificationReducer
  })
});

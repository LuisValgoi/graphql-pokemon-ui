import { combineReducers } from 'redux';

import NotificationReducer from './ViewSettings/reducers/Notification';
import ModalReducer from './ViewSettings/reducers/Modal';

import PokemonListReducer from './Pokemon/reducers/List';
import PokemonDetailReducer from './Pokemon/reducers/Detail';
import PokemonEditReducer from './Pokemon/reducers/Edit';

export default combineReducers({
  pokemon: combineReducers({
    list: PokemonListReducer,
    detail: PokemonDetailReducer,
    edit: PokemonEditReducer
  }),
  viewSettings: combineReducers({
    notification: NotificationReducer,
    modal: ModalReducer
  })
});

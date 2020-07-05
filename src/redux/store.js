
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { loadState, saveState } from '../util/LocalStorage';
import throttle from 'lodash/throttle';

import RootReducer from './RootReducer';
import RootSaga from './RootSaga';

const persistedState = loadState();
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, persistedState, composeEnhancers(applyMiddleware(...middleware)));
sagaMiddleware.run(RootSaga);
store.subscribe(throttle(() => { saveState({ ...store.getState() }) }, 1000));

export default store;

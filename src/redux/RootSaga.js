import { all } from 'redux-saga/effects';

import watchMainSagas from './Main/MainSaga';

export default function* rootSaga() {
  yield all([
    watchMainSagas()
  ]);
}

import { all } from 'redux-saga/effects';

import watchMainSagas from '../pages/Main/MainSaga';

export default function* rootSaga() {
  yield all([
    watchMainSagas()
  ]);
}

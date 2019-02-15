import { all, fork } from 'redux-saga/effects';

import { watchRegister } from './register-sagas'
import { usersWatcher } from './users-sagas'

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(watchRegister),
    fork(usersWatcher),
  ]);
}

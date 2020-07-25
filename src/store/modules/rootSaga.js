import { all } from 'redux-saga/effects';

import dashboard from './dashboard/sagas';
import login from './login/sagas';

export default function* rootSaga() {
  return yield all([dashboard, login]);
}

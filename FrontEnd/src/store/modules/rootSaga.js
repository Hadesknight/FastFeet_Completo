import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import delivery from './delivery/sagas';

export default function* rootSaga() {
    return yield all([auth, user, delivery]);
}

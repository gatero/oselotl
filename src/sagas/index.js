// @flow
import type {Saga} from 'redux-saga';
import {
  all,
  fork,
  takeLatest
} from 'redux-saga/effects';
import {
  createRequestInstance,
  watchRequests
} from 'redux-saga-requests';
import {default as driver} from 'redux-saga-requests-fetch';

import {baseURL} from 'Constants';
import * as user from 'Sagas/user';
import {onRequest} from 'Sagas/interceptors';

// As is explained in: https://github.com/klis87/redux-saga-requests/issues/68
// we have to overwrite the `getErrorPayload` in the fetchApiDriver here as
// driver
driver.getErrorPayload = async error => await error.json();

export default function* (): Saga {
  yield fork(user.sync)
  yield all ([
    takeLatest('USER_SIGNIN_WITH_POPUP', user.signInWithPopup),
    takeLatest('USER_SIGNOUT', user.singOut),
  ]);
  yield createRequestInstance(fetch, {driver, baseURL, onRequest});
  yield watchRequests();
};

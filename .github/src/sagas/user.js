// @flow
import type {Saga} from 'redux-saga';
import {
  call,
  put,
  take
} from 'redux-saga/effects';
import {
  provider,
  rsf
} from 'Helpers/firebase';

export function* singOut(): Saga {
  try {
    const _ = yield call(rsf.auth.signOut);
    yield put({type: 'USER_SYNC', _});
  } catch (error) {
    yield put({type: 'USER_SIGNOUT_FAILED', error});
  }
};

export function* signInWithPopup(): Saga {
  try {
    yield call(rsf.auth.signInWithPopup, provider);
    yield put({type: 'USER_SYNC'});
  } catch (error) {
    yield put({type: 'USER_SIGNIN_WITH_POPUP_FAILED', error});
  }
};

export function* sync (): Saga {
  const channel = yield call(rsf.auth.channel);

  while (true) {
    const {user} = yield take(channel);
    const loggedIn = Boolean(user);
    yield put({type: 'USER_SET', payload: {loggedIn, user}});
  }
}

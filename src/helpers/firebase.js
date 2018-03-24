// @flow
import {
  auth,
  initializeApp
} from 'firebase';
import {FIREBASE_CONFIG} from 'Constants';
import ReduxSagaFirebase from 'redux-saga-firebase';

export const provider = new auth.FacebookAuthProvider();

export const rsf = new ReduxSagaFirebase(initializeApp(FIREBASE_CONFIG));

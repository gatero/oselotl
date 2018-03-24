// @flow
import type {Request} from 'Sagas/types';
import store from 'Store';

export const onRequest = (request: Request) => {
  const {handleUser: {loggedIn}} = store.getState();

  if (loggedIn) {
    const {handleUser: {user: {h: {b: Authorization}}}} = store.getState();
    request.headers = {Authorization};
  }

  return request;
};

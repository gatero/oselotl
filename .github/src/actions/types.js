// @flow
import type {FirebaseUser} from '@/types';

// User Actions
export type logUserAction = {
  type: string,
  payload: {
    loggedIn: boolean,
    user: ?FirebaseUser
  }
};

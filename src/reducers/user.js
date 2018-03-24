// @flow
import {userInitialState} from '@/initialState';
import type {logUserAction} from 'Actions/types';
import type {ReduxUserState} from '@/types';

export default (state: ReduxUserState = userInitialState, action: logUserAction): ReduxUserState => {
  switch(action.type) {
    case 'USER_SET':
      return {
        ...state,
        loggedIn: action.payload.loggedIn,
        user: action.payload.user
      };
    default:
      return state;
  }
};

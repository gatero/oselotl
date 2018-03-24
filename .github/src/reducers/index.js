// @flow
import {combineReducers} from 'redux';
import handleUser from 'Reducers/user';
import test from 'Reducers/api';

export default combineReducers({
  handleUser,
  test
});

// @flow
import * as actions from 'Actions';
import {bindActionCreators} from 'redux';
import type {ReduxState} from '@/types';

export const mapStateToProps = (state: ReduxState): ReduxState => ({...state});
export const mapDispatchToProps = (dispatch: Object): Object => ({
  actions: bindActionCreators(actions, dispatch)
});

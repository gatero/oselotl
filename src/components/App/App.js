// @flow
import * as React from 'react';
import type {AppProps} from 'Components/App/types';
import Chip from 'react-toolbox/lib/chip/Chip';

export default class App extends React.Component<AppProps, void> {
  render(): React.Node {
    const {
      loggedIn,
      username
    } = this.props;

    return loggedIn ? <Chip>{username}</Chip> : <span>You aren't logged in</span>;
  }
}

// @flow
import * as React from 'react';
import type {AppProps} from 'Components/App/types';
import type {ComponentConnectedRedux} from '@/types';
import type {LoginProps} from 'Components/Login/types';

import {connect} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-redux';
import {
  Link,
  Route,
  withRouter
} from 'react-router-dom';

import App from 'Components/App';
// Just for test :-P
import {default as ButtonWrapper} from 'Components/Login';
import {history} from 'Helpers/router';
import {mapStateToProps, mapDispatchToProps} from 'Helpers/redux';
import store from 'Store';

const RouterHelper = (props: ComponentConnectedRedux): React.Element<'div'> => {
  const {
    actions: {userSignIn, userSignOut, test},
    handleUser: {loggedIn, user}
  } = props;

  let username: ?string = null;
  if (user) username = user.displayName;

  const appConfig: AppProps = {loggedIn, username};

  const loginConfig: LoginProps = {
    disabled: loggedIn,
    label: 'Login',
    onClick: userSignIn
  };

  const logoutConfig: LoginProps = {
    disabled: !loggedIn,
    label: 'Logout',
    onClick: userSignOut
  };

  const getUsers = {
    disabled: false,
    label: 'GetAllUsers',
    onClick: test
  };

  const routeApp = {
    exact: true,
    path: '/',
    render: () => <div><App {...appConfig}/></div>
  };

  const routeLogin = {
    path: '/login',
    render: () => (
      <div>
        <ButtonWrapper {...loginConfig}/>
        {' '}
        <ButtonWrapper {...logoutConfig}/>
        {' '}
        <ButtonWrapper {...getUsers}/>
      </div>
    )
  };

  return (
    <div>
      <Link to="/">Root</Link>
      {' '}
      <Link to="/login">Login</Link>
      <Route {...routeApp}/>
      <Route {...routeLogin}/>
    </div>
  )
};

const RouterHelperWrapper = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RouterHelper)
);


const Wrapper = (): React.Element<typeof Provider> =>
  <Provider {...{store}}>
    <ConnectedRouter {...{history}}>
      <RouterHelperWrapper/>
    </ConnectedRouter>
  </Provider>

export default Wrapper;

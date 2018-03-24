// @flow

export type FirebaseUser = {
  displayName?: string,
  email?: string,
  emailVerified: boolean,
  isAnonymous: boolean,
  metadata: {
    creationTime?: string,
    lastSignInTime?: string
  },
  phoneNumber?: string,
  photoUrl?: string,
  providerData: Array<{
    displayName?: string,
    email?: string,
    phoneNumber?: string,
    photoUrl?: string,
    providerId: string,
    uid: string
  }>,
  stsTokenManager: {
    accessToken: string,
    apiKey: string,
    expirationTime: string,
    refreshToken: string
  },
  uid: string
};

export type ReduxUserState = {
  user: ?FirebaseUser,
  loggedIn: boolean
};

export type ReduxRouterState = {
  location: {
    hash: string,
    key: string,
    pathname: string,
    search: string
  }
};

export type ReduxState = {
  handleUser: ReduxUserState,
  router: ReduxRouterState
};

export type ActionsRedux = {
  appInit: Function,
  test: Function,
  userSignIn: Function,
  userSignOut: Function
};

export type ComponentConnectedRedux = {
  actions: ActionsRedux,
  handleUser: ReduxUserState,
  router: ReduxRouterState
};

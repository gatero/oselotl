// @flow

// User Handlers
export const userSignIn = () => ({type: 'USER_SIGNIN_WITH_POPUP'});
export const userSignOut = () => ({type: 'USER_SIGNOUT'});

export const test = () => ({type: 'FETCH_USERS', payload: {
  request: {
    url: '/profile'
  }
}});

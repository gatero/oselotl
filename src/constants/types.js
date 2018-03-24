// @flow

export type ENVS = {
  development: string,
  production: string,
  staging: string
};

export type FirebaseConfig = {
  apiKey: string,
  authDomain: string,
  databaseURL: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string
};

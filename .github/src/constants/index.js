// @flow
import type {
  ENVS,
  FirebaseConfig
} from 'Constants/types';

export const ENVIRONMENT: string = process.env.NODE_ENV ?
  process.env.NODE_ENV : 'development';
export const FIREBASE_CONFIG: FirebaseConfig = {
  apiKey: "AIzaSyDivGCJVSEVXLxvKP58JZalcdJCUkOvI5E",
  authDomain: "cc-cms-dev.firebaseapp.com",
  databaseURL: "https://cc-cms-dev.firebaseio.com",
  projectId: "cc-cms-dev",
  storageBucket: "cc-cms-dev.appspot.com",
  messagingSenderId: "471220415134"
};

// Sentry
const RAVEN_CONFIG_URL: ENVS = {
  development: 'https://14436b66bea84c56b872f354cbd56001@sentry.io/282164',
  production: '',
  staging: ''
};
export const RAVEN_CONFIG: string = RAVEN_CONFIG_URL[ENVIRONMENT];

// API
const API_URL: ENVS = {
  development: 'https://dev.api.culturacolectiva.com',
  production: 'https://api.culturacolectiva.com',
  staging: 'https://staging.api.culturacolectiva.com'
};
export const baseURL: string = API_URL[ENVIRONMENT];

// @flow
import {ENVIRONMENT} from 'Constants';

const {
  debug,
  error
} = console;

export {debug};
export const DEBUG: boolean = ENVIRONMENT === 'development';
export {error};
export const idRandom = (length: number = 5): string => {
  let text: string = '';
  const possible: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

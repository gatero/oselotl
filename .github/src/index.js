// @flow
// Polyfill to redux-saga-requests to work
import 'regenerator-runtime/runtime';
import React from 'react';
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './styles';
import '@/toolbox/theme.css';
import Wrapper from 'Components/App/Wrapper';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from '@/toolbox/theme';

const root = document.getElementById('root');

if (root instanceof HTMLElement) {
  render(
    <ThemeProvider {...{theme}}>
      <Wrapper />
    </ThemeProvider>
    , root);
  registerServiceWorker();
}

// @flow
import Raven from 'raven-js';
import createRavenMiddleware from 'raven-for-redux';
import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from 'Reducers';
import rootSaga from 'Sagas';
import {RAVEN_CONFIG} from 'Constants';

Raven.config(RAVEN_CONFIG).install()

const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
  createRavenMiddleware(Raven)
];

export default createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';

import createHistory from 'history/createBrowserHistory';

import reducers from './../reducers';
import sagas from './../sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createHistory();

const logger = createLogger();
const middlewareRouter = routerMiddleware(history);
const middlewareSaga = createSagaMiddleware();

const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(logger, middlewareRouter, middlewareSaga)
    )
);

middlewareSaga.run(sagas);

export default store;

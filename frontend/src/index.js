import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';

import App from './screens/App';
import reducers from './reducers';
import sagas from './sagas';
import registerServiceWorker from './registerServiceWorker';

import 'semantic-ui-css/semantic.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory();
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

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
     </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

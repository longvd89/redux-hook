import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './reducers';

import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
import App from './App';

import * as serviceWorker from './serviceWorker';
import { fetchGithubData } from './actions/index';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (process.env.NODE_ENV === `development`) {
    middleware.push(logger);
}
const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);
const store = createStore(
    rootReducer,
    enhancer
    );
    // compose(
    //     // applyMiddleware(thunk),
    //     window.devToolsExtension ? window.devToolsExtension() : f => f
    // ));

store.dispatch(fetchGithubData());

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

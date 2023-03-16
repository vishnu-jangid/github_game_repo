
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from "./reducers";
import { createLogger } from 'redux-logger'

var isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

var logger = createLogger({
  predicate: (getState: any, action: any) => isDebuggingInChrome || null,
  collapsed: true,
  duration: true,
});

const middleware = applyMiddleware(promise, logger);

const store = createStore(reducers, middleware);

export default store;
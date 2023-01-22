import { applyMiddleware, compose, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import { createLogger } from "redux-logger";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

import { configureStore } from "@reduxjs/toolkit";
// import { Action } from './saga/actions'
// import { CombinedAppState } from './reducer/CombinedAppState'

const typesToExclude: string[] = [];

const dev =
  process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test";

const sagaMiddleware = createSagaMiddleware();
const makeStore = (initialState = {}) => {
  const loggerMiddleware = createLogger({
    predicate: (getState: any, action: any) =>
      !typesToExclude.includes(action.type),
  });

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ["persist/PERSIST"],
          // Ignore these field paths in all actions
          // ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
          // Ignore these paths in the state
          // ignoredPaths: ['items.dates'],
        },
      })
        .prepend(sagaMiddleware)
        .concat(loggerMiddleware),
  });

  const persist = persistStore(store, undefined, () =>
    sagaMiddleware.run(rootSaga)
  );

  return { persist, store };

  //   const middleware = dev
  //     ? applyMiddleware(
  //         createLogger({
  //           predicate: (getState, action) =>
  //             !typesToExclude.includes(action.type),
  //         }),
  //         sagaMiddleware
  //       )
  //     : applyMiddleware(sagaMiddleware);

  //   const enhancer = compose(middleware);
  //   const store: Store<any, any> = createStore(
  //     rootReducer,
  //     initialState,
  //     enhancer
  //   );
  //   const store: Store<CombinedAppState, Action> = createStore(reducers, initialState, enhancer)
};

export default makeStore;

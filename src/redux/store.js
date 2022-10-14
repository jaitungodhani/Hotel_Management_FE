import {applyMiddleware,createStore,compose} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSagas";

const sagaMiddleware= createSagaMiddleware();

const middlewares=[sagaMiddleware];

if(process.env.NODE_ENV==="development"){
    middlewares.push(logger)
}

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store= createStore(rootReducer,composeEnhancers(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga);

export default store;
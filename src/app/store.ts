import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/rootSaga";
import reducers from "./reducer";
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const store = compose(applyMiddleware(...middleware))(createStore)(
  reducers
);
sagaMiddleware.run(rootSaga);

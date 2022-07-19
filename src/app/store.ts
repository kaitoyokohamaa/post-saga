import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga/rootSaga";
import rootReducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const store = compose(applyMiddleware(...middleware))(createStore)(
  rootReducer
);
sagaMiddleware.run(rootSaga);

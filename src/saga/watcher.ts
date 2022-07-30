import { takeEvery, takeLatest } from "redux-saga/effects";
import { HOME, SIGNUP_USER } from "../ducks/signup/name";
import { signupSaga } from "./signup/signupSaga";

export function* watchUserAuthentication() {
  yield takeLatest(SIGNUP_USER, signupSaga);
}

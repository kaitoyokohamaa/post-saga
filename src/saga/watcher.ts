import { takeLatest } from "redux-saga/effects";
import { SIGNUP_USER } from "../ducks/signup/name";
import { signupSaga } from "./authenticationSaga";
export default function* watchUserAuthentication() {
  yield takeLatest(SIGNUP_USER, signupSaga);
}

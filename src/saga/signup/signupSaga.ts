import { put, call } from "redux-saga/effects";
import { signupUserService } from "../../services/signupService";
import {
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
} from "../../ducks/signup/name";
import { signupActionType } from "./type";
import Router from "next/router";
export function* signupSaga(payload: signupActionType) {
  try {
    const { token, error, ...args } = yield call(signupUserService, payload);
    yield put({
      type: SIGNUP_USER_SUCCESS,
      payload: { token, ...args },
    });
    if (!error) {
      Router.push("/home");
    }
  } catch (error) {
    yield put({ type: SIGNUP_USER_ERROR, error });
  }
}

import { put, call } from "redux-saga/effects";
import { signupUserService } from "../../services/signupService";
import { signupResponseType } from "../../ducks/signup/type";
import {
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
} from "../../ducks/signup/name";
import { signupActionType } from "./type";

export function* signupSaga(payload: signupActionType) {
  try {
    const response: signupResponseType = yield call(signupUserService, payload);

    yield put({ type: SIGNUP_USER_SUCCESS, response });
  } catch (error) {
    yield put({ type: SIGNUP_USER_ERROR, error });
  }
}

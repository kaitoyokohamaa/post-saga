import { put, call } from "redux-saga/effects";
import { signupUserService } from "../services/authenticationService";
import { signupResponseType } from "../ducks/signup/type";
import {
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_ERROR,
  SIGNUP_USER,
} from "../ducks/signup/name";

type Props = {
  type: typeof SIGNUP_USER;
  user: signupResponseType;
};

export function* signupSaga(payload: Props) {
  try {
    const response: signupResponseType = yield call(signupUserService, payload);
    yield [put({ type: SIGNUP_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: SIGNUP_USER_ERROR, error });
  }
}

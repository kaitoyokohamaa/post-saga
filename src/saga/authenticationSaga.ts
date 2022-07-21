import { put, call } from "redux-saga/effects";
import { registerUserService } from "../services/authenticationService";
import { signupResponseType } from "../ducks/signup/type";
import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "../ducks/signup/name";

export function* registerSaga(payload: signupResponseType) {
  console.log(payload);
  try {
    const response: signupResponseType = yield call(
      registerUserService,
      payload
    );
    yield [put({ type: REGISTER_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: REGISTER_USER_ERROR, error });
  }
}

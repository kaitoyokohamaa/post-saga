import { put, call } from "redux-saga/effects";
import { registerUserService } from "../services/authenticationService";
const REGISTER_USER_SUCCESS = "register_user_success";
const REGISTER_USER_ERROR = "register_user_error";
export function* registerSaga(payload: any) {
  try {
    const response = yield call(registerUserService, payload);
    yield [put({ type: REGISTER_USER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: REGISTER_USER_ERROR, error });
  }
}

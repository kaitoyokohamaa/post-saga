import { SIGNUP_USER_SUCCESS, SIGNUP_USER_ERROR } from "./name";
export default function signupReducer(state = [], action: any) {
  const response = action.response;
  switch (action.type) {
    case SIGNUP_USER_SUCCESS:
      return { ...state, response };
    case SIGNUP_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}

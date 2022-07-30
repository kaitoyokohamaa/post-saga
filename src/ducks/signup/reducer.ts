import { SIGNUP_USER_SUCCESS, SIGNUP_USER_ERROR } from "./name";

export default function signupReducer(state = [], action: any) {
  const response = action.payload;

  switch (action.type) {
    case SIGNUP_USER_SUCCESS:
      document.cookie = `token=${response.token}`;
      return { ...state, response };
    case SIGNUP_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
}

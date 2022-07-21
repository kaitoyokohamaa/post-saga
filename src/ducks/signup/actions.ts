import { SIGNUP_USER } from "./name";
import { signupResponseType } from "./type";
export const signupUserAction = (user: signupResponseType) => {
  return {
    type: SIGNUP_USER,
    user,
  };
};

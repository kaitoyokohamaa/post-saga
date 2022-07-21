import { REGISTER_USER } from "./name";
import { signupResponseType } from "./type";
export const registerUserAction = (user: signupResponseType) => {
  return {
    type: REGISTER_USER,
    user,
  };
};

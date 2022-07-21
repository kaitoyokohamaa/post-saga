import { SIGNUP_USER } from "../../ducks/signup/name";
import { signupResponseType } from "../../ducks/signup/type";

export type signupActionType = {
  type: typeof SIGNUP_USER;
  user: signupResponseType;
};

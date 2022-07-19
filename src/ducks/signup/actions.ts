import { REGISTER_USER } from "./name";

export const registerUserAction = (user: any) => {
  return {
    type: REGISTER_USER,
    user,
  };
};

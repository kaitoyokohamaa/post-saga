import { expectSaga } from "redux-saga-test-plan";
import { SIGNUP_USER } from "../../ducks/signup/name";
import { signupSaga } from "./signupSaga";
import { signupUserService } from "../../services/signupService";
import * as matchers from "redux-saga-test-plan/matchers";
const mockUser = {
  type: SIGNUP_USER as typeof SIGNUP_USER,
  user: {
    sign_up_user_params: {
      name: "kaito yokohama",
      bio: "I am kaito yokohama",
      email: "kaito@gmail.com",
      password: "000000000",
      password_confirmation: "000000000",
    },
  },
};
const mockApiResponse = {
  bio: "tete",
  created_at: "2022-07-23T06:24:13.694Z",
  email: "tetetrer",
  id: 1318,
  name: "te",
  token: "syWXNjOa3OF0y9AiQqGuLgtt",
  updated_at: "2022-07-23T06:24:13.694Z",
};
describe("正常系", () => {
  it("正常", () => {
    expectSaga(signupSaga, mockUser)
      .provide([matchers.call.fn(signupUserService), mockApiResponse])
      .returns(mockApiResponse)
      .run();
  });
});

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signupUserAction } from "../../ducks/signup/actions";
import { signupResponseType } from "../../ducks/signup/type";

export const Pages = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signupResponseType["sign_up_user_params"]>();

  const onSubmit: SubmitHandler<signupResponseType["sign_up_user_params"]> = (
    user
  ) => {
    dispatch(signupUserAction({ sign_up_user_params: user }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input {...register("name")} />
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input {...register("email")} />
        </div>
        <div>
          <label htmlFor="bio">bio</label>
          <input {...register("bio")} />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input {...register("password")} />
        </div>
        <div>
          <label htmlFor="password_confirmation">password_confirmation</label>
          <input {...register("password_confirmation")} />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

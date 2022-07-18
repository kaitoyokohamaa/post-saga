import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
export const Pages = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
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

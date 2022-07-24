export const signupUserService = async (request: any) => {
  const SIGNUP_API_ENDPOINT = `${process.env.NEXT_PUBLIC_API_KEY}/sign_up`;
  const parameters = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.user),
  };

  const data = await fetch(SIGNUP_API_ENDPOINT, parameters);
  console.log(await data.json());
  return data.json();
};

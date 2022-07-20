export const registerUserService = async (request: any) => {
  const REGISTER_API_ENDPOINT = `${process.env.NEXT_PUBLIC_API_KEY}/sign_up`;
  const parameters = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.user),
  };

  const data = await fetch(REGISTER_API_ENDPOINT, parameters);
  return data.json();
};

import axios from "../helpers/apiCall";

export const signup = async (body) => {
  const response = await axios.post(
    `${process.env.REACT_APP_BE_URL}/users/signup`,
    body,
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );

  return response;
};

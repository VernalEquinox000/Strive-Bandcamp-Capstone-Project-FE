import axios from "../helpers/apiCall";

export const signup = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/users/signup`,
      body,
      { headers: { "Content-Type": "application/json" }, withCredentials: true }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const getUserById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}/users/${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

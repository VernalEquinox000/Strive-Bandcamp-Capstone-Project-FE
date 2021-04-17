import axios from "../helpers/apiCall";

//signup
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

//login
export const login = async (body) => {
  //try {
  const response = await axios.post(
    `${process.env.REACT_APP_BE_URL}/users/login`,
    body,
    {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    }
  );
  return response;
  /* } catch (error) {
    console.log(error);
  } */
};

//get user by Id
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

//get all users
export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}/users`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getUserMe = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}/me`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const editUserMe = async (body) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BE_URL}/me`,
      body,
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

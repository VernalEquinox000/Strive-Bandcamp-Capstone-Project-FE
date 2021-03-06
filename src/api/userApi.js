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
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/users/login`,
      body,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//logout
export const logout = async () => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/users/logout`,
      {},
      { withCredentials: true }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//get user by Id
export const getUserById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}/users/${id}`,
      {
        withCredentials: true,
      }
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

/* export const getUserMe = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}/me`, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}; */

//PUT user me
export const editUserMe = async (body) => {
  try {
    const response = await axios.put(
      `${process.env.REACT_APP_BE_URL}/users/me`,
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

//GET artist query

export const getArtists = async (query) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BE_URL}/users?role=artist&artistName=${query}`
  );
  return response;
};

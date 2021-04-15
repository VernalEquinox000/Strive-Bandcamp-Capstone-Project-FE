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

export const loginUser = async (body) => {
  try {
    // const response = await axios.post(
    //   `${process.env.REACT_APP_BE_URL}/login`,
    //   body,
    //   {
    //     headers: { "Content-Type": "application/json" },
    //     withCredentials: true,
    //   }
    // );
    const response = await fetch(
      `${process.env.REACT_APP_BE_URL}/users/login`,
      {
        method: "POST",

        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      }
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

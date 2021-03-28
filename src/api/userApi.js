import axios from "axios";

export const registerUser = async (email, password, role) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/users/signup`,
      email,
      password,
      role,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};

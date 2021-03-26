import axios from "axios";
import { User } from "../interfaces";

export const registerUser = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/register`,
      body,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

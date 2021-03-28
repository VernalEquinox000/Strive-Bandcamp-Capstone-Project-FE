import axios from "axios";
export const signup = async (data) => {
  const config = {
    headers: {
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/users/signup`,
      data,
      config
    );

    if (response.status === 200) {
      return response.data;
    } else {
      return response.data;
    }
  } catch (error) {
    console.log("Error in signup fetching", error);
    console.log("error response data", error.response.data);
    return error.response.data;
  }
};

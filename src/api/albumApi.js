import axios from "../helpers/apiCall";

export const getAlbumById = async (id) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_URL}/albums/${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

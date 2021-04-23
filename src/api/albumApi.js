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

export const addAlbum = async (body) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BE_URL}/albums`,
      body,
      {
        headers: { "Content-Type": "application/json" },
        //withCredentials: true
      }
    );
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//get all albums
export const getAllAlbums = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_BE_URL}/albums`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

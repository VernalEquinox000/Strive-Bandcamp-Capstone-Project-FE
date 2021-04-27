function userReducer(state = {}, action) {
  switch (action.type) {
    case "SET_USER":
      return action.payload;
    case "ADD_ALBUM":
      return {
        ...state,
        albumsCollected: [...state.albumsCollected, action.payload],
      };
    case "DELETE_ALBUM":
      return {
        ...state,
        albumsCollected: state.albumsCollected.filter(
          (album) => album._id === action.payload
        ),
      };
    case "UNSET_USER":
      return null;
    default:
      return state;
  }
}

export default userReducer;

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log("action:", action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...initialState,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  SET_DISCOVER_WEEKLY: "SET_DISCOVER_WEEKLY",
};

const reducer = (
  state: any,
  action: {
    type: string;
    user: any;
    token: any;
    playlist: any;
    discoverWeekly: any;
    playlists: any;
  }
) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case actionTypes.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };

    case actionTypes.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discoverWeekly: action.discoverWeekly,
      };
    default:
      return state;
  }
};

export default reducer;

import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

// Slice
const slice = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
    setToken: (state, action) => {
      return {
        ...state,
        token: action.payload,
      };
    },
    setPlayLists: (state, action) => {
       return {
        ...state,
        playlists: action.payload,
      };
    },
    setDiscoverWeekly: (state, action) => {
      return {
        ...state,
        discoverWeekly: action.payload,
      };
    }
  },
});


export default slice.reducer
export const { setUser, setToken, setPlayLists, setDiscoverWeekly } = slice.actions



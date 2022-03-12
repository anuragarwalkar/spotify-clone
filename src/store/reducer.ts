import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import SpotifyWebApi from 'spotify-web-api-js';
const spotify = new SpotifyWebApi();

export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  discoverWeekly: null
};

export const getUser: any =  createAsyncThunk('main/getUser', async () => {
  // Getting all user information
  return await spotify.getMe();
})

export const getPlaylists: any = createAsyncThunk('main/getPlaylists', async () => {
  // Getting all user playlist from spotify API
 return await spotify.getUserPlaylists();
 
})

export const getDiscoverWeekly: any = createAsyncThunk('main/getDiscoverWeekly', async () => {
  const {
    playlists: {
      items: [{ id }],
    },
  } = await spotify.searchPlaylists("discover weekly");
  return await spotify.getPlaylist(id);
})

// Slice
const slice = createSlice({
  name: 'main',
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      spotify.setAccessToken(action.payload);
      return {
        ...state,
        token: action.payload,
      };
    }
  },
  extraReducers: {
    [getUser.fulfilled]:  (state, {payload}) => {
      if(payload) {
        state.user = payload;
      }
    },
    [getPlaylists.fulfilled]: (state, {payload}) => {
      if (payload?.items) {
        state.playlists = payload.items;
      }
    },
    [getDiscoverWeekly.fulfilled]: (state, {payload}) => {
      if(payload) {
        state.discoverWeekly = payload;
      }
    }
  }
});


export default slice.reducer
export const { setToken } = slice.actions



import { createSlice } from "@reduxjs/toolkit";
// Slice
const PlayerSlice = createSlice({
  name: "player",
  initialState: {
    PlayerList: [],
    PlayerDetail: {},
  },
  reducers: {
    getPlayers: (state, action) => {
      console.log("hmm");
      console.log(action);
      state.PlayerList = action.payload;
    },
    getPlayerDetail: (state, action) => {
      state.PlayerDetail = action.payload;
    },
  },
});

export const { getPlayers, getPlayerDetail } = PlayerSlice.actions;
export default PlayerSlice.reducer;

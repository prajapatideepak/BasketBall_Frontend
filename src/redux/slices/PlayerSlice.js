import { createSlice } from "@reduxjs/toolkit";
// Slice
const PlayerSlice = createSlice({
  name: "player",
  initialState: {
    PlayerList: [],
    PlayerDetail: {},
    PlayerForm: {
      basicInfo: {
        logo : "",
        first_name: "",
        middle_name: "",
        last_name: "",
        mobile: "",
        alternate_mobile: "",
        date_of_birth: "",
        gender: "",
        pincode: "",
      },
      gameInfo: {
        height: "",
        weight: "",
        playing_position: "",
        jersey_no: "",
        about: "",
      },
    },
    Notification: [],
  },
  reducers: {
    getPlayers: (state, action) => {
      state.PlayerList = action.payload;
    },
    setPlayerDetail: (state, action) => {
      state.PlayerDetail = action.payload;
    },
    setBasicForm: (state, action) => {
      state.PlayerForm.basicInfo = action.payload;
    },
    setGameForm: (state, action) => {
      state.PlayerForm.gameInfo = action.payload;
    },
    setNotfication: (state, action) => {
      state.Notification = action.payload;
    },
  },
});

export const {
  getPlayers,
  setPlayerDetail,
  setNotfication,
  setGameForm,
  setBasicForm,
} = PlayerSlice.actions;
export default PlayerSlice.reducer;

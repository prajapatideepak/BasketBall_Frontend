import { createSlice } from "@reduxjs/toolkit";
// Slice
const PlayerSlice = createSlice({
  name: "player",
  initialState: {
    PlayerList: [],
    PlayerDetail: {},
    PlayerForm: {
      basicInfo: {
        firstName: "",
        middleName: "",
        lastName: "",
        mobileNo: "7259140210",
        alternativeNo: "",
        dob: "",
        gender: "",
        pincode: "",
      },
      gameInfo: {
        height: "",
        weight: "",
        playerPosition: "",
        JerseyNumber: "",
        Experience: "",
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

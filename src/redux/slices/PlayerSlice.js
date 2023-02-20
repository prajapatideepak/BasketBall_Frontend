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
        mobileNo: "",
        alternativeNo: "",
        dob: "",
        gender: "",
        pincode: "",
      },
    },
  },
  reducers: {
    getPlayers: (state, action) => {
      console.log("hmm");
      console.log(action);
      state.PlayerList = action.payload;
    },
    setPlayerDetail: (state, action) => {
      state.PlayerDetail = action.payload;
    },
    setBasicForm: (state, action) => {
      state.PlayerForm.basicInfo = action.payload;
    },
  },
});

export const { getPlayers, setPlayerDetail, setBasicForm } =
  PlayerSlice.actions;
export default PlayerSlice.reducer;

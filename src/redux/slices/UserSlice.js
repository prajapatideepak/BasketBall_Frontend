import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorage } from "../../hooks/localStorage";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    token: useLocalStorage({ key: "user" }),
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});



export const { setToken } = UserSlice.actions;

export default UserSlice.reducer;

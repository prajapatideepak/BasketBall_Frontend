import { createSlice } from "@reduxjs/toolkit";
import { useLocalStorage } from "../../hooks/localStorage";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    token: useLocalStorage({ key: "token" }),
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    }
  },
});



export const { setToken, setUser } = UserSlice.actions;

export default UserSlice.reducer;

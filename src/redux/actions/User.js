import { useLocalStorage } from "../../hooks/localStorage";
import { setToken } from "../slices/UserSlice";

export const authentication = (data) => {
  const temp = {
    email: "wellbenix@gmail.com",
    password: "1234",
  };
  return async (dispatch) => {
    console.log("so");
    // if (temp.email.toLowerCase() == data.email.toLowerCase()) {
    //   if (temp.password == data.password) {
    dispatch(setToken("gmaspfep3r1r3123225412"));
    //   }
    // }
  };
};

export const logout = () => {
  localStorage.clear();
  console.log("ass");
  return async (dispatch) => {
    dispatch(setToken(""));
  };
};

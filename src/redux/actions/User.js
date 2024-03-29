import { useLocalStorage } from "../../hooks/localStorage";
import { setToken, setUser } from "../slices/UserSlice";

export const authentication = (token, user) => {
  return async (dispatch) => {
    dispatch(setToken(token));
    dispatch(setUser(user));
    useLocalStorage({ key: "token", value: token });
  };
};

export const logout = () => {
  localStorage.clear();
  return async (dispatch) => {
    dispatch(setToken(""));
    dispatch(setUser(""));
  };
};

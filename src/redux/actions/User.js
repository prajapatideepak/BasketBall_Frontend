import { setToken } from "../slices/UserSlice";

export const Login = (data) => {
  const temp = {
    username: "7359150166",
    password: "1234",
  };
  return async (dispatch) => {
    if (temp.username.toLowerCase() == data.username.toLowerCase()) {
      if (temp.password == data.password) {
        dispatch(setToken("gmaspfep3r1r3123225412"));
      }
    }
  };
};

import newsReducer from "./newsSlice";
import playerReducer from "./PlayerSlice";
import userReducer from "./UserSlice";
//yaha ham sare reducer ko combine karege
const Reducers = {
  newsReducer,
  playerReducer,
  userReducer,
};

export default Reducers;

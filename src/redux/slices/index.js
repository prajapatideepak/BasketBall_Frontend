import newsReducer from "./newsSlice";
import playerReducer from "./PlayerSlice";
import userReducer from "./UserSlice";
import teamReducer from "./TeamSlice";
//yaha ham sare reducer ko combine karege
const Reducers = {
  newsReducer,
  playerReducer,
  userReducer,
  teamReducer,
};

export default Reducers;

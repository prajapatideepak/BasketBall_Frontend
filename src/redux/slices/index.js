import newsReducer from "./newsSlice";
import playerReducer from "./PlayerSlice";
//yaha ham sare reducer ko combine karege
const Reducers = {
  newsReducer,
  playerReducer,
};

export default Reducers;

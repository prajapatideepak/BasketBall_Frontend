import newsReducer from "./newsSlice";
import playerReducer from "./PlayerSlice";
import userReducer from "./UserSlice";
import teamReducer from "./TeamSlice";
import { api } from "../../services/api";
//yaha ham sare reducer ko combine karege

const reducers = {
  api: api.reducer,

  news: newsReducer,
  player: playerReducer,
  user: userReducer,
  team: teamReducer,
};

export default reducers;

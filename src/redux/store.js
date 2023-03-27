import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import Reducers from "./slices";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    Reducers,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

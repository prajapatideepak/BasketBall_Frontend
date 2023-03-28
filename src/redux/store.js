import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import reducers from "./slices";

export const store = configureStore({
  reducer: {
    reducers,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

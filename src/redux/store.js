import { configureStore } from "@reduxjs/toolkit";
import Reducers from "./slices";

export const store = configureStore({
  reducer: Reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

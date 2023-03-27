import React from "react";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  if (process.env.NODE_ENV == "development") {
    document.getElementById("root").classList.add("debug-screens");
  }
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default App;

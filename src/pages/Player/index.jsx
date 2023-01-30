import React from "react";
import { Route, Routes } from "react-router-dom";
import PlayerRegister from "./PlayerRegister/Register";

const Player = () => {
  return (
    <>
      <Routes>
        <Route>
          {/* <Route path="/" element={<NewsPage />} /> */}
          <Route path="/register" element={<PlayerRegister />} />

          {/* <Route index element={<NewsPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default Player;

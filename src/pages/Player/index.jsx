import React from "react";
import { Route, Routes } from "react-router-dom";
import PlayerProfile from "./PlayerProfile";
import PlayerRegister from "./PlayerRegister/Register";

const Player = () => {
  return (
    <>
      <Routes>
        <Route>
          {/* <Route path="/" element={<NewsPage />} /> */}
          <Route path="/register" element={<PlayerRegister />} />
          <Route path="/:id" element={<PlayerProfile />} />

          {/* <Route index element={<NewsPage />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default Player;

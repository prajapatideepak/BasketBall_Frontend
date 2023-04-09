import React from "react";
import { Route, Routes } from "react-router-dom";
import PlayerList from "./PlayerList";
import PlayerProfile from "./PlayerProfile";
import PlayerRegister from "./PlayerRegister/Register";

const Player = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/list" element={<PlayerList />} />
          <Route path="/add-edit" element={<PlayerRegister />} />
          <Route path="/profile-detail/:id" element={<PlayerProfile />} />

          <Route index element={<PlayerList />} />
        </Route>
      </Routes>
    </>
  );
};

export default Player;

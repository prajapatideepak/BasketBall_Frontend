import React from "react";
import { Route, Routes } from "react-router-dom";
import TournamentAddEdit from "./TournamentAddEdit";
import TournamentsList from "./TournamentsList";
import TournamentsOfOrganizer from "./TournamentsOfOrganizer";
import TournamentDetails from "./TournamentDetails";

const Tournament = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/add-edit" element={<TournamentAddEdit />} />
          <Route path="/:tournament_id" element={<TournamentDetails />} />
          {/* <Route path="/registration" element={<Registration />} /> */}
          <Route path="/organizer" element={<TournamentsOfOrganizer />} />
          <Route path="/" element={<TournamentsList />} />
        </Route>
      </Routes>
    </>
  );
};

export default Tournament;

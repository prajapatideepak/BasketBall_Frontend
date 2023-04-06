import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import Team from "../pages/Team";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import Gallery from "../pages/Gallery";
import News from "../pages/News";
import Player from "../pages/Player";
import Role from "../pages/Role";
import VisitorProfile from "../pages/Profile";
import AfterRole from "../pages/RegisterAfterLogin";
import TermsandConditions from "../pages/Term&Condistions";
import MatchsList from "../pages/Matches";
import TeamProfileDetail from "../pages/Team/TeamProfileDetail";
import PageNotFound from "../pages/Error";
import MatchDetails from "../pages/Matches/MatchDetails";
import Scoreboard from "../pages/Scoreboard";
import Tournament from "../pages/Tournament";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="/match" element={<MatchsList />} />
        <Route path="/match-details/:id" element={<MatchDetails />} />
        <Route
          path="/profile-detail/:team_id"
          element={<TeamProfileDetail />}
        />
        <Route path="/Visitor-profile" element={<VisitorProfile />} />
        <Route path="/role" element={<Role />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="news/*" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="player/*" element={<Player />} />
        <Route path="tournament/*" element={<Tournament />} />
        <Route path="team/*" element={<Team />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/registration" element={<AfterRole />} />
        <Route path="/term&condition" element={<TermsandConditions />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/*" element={<PageNotFound />} />
        
        <Route index element={<Dashboard />} />
      </Route>
      <Route path="/scoreboard/:match_id/:token" element={<Scoreboard />} />
    </Routes>
  );
};

export default PrivateRoutes;

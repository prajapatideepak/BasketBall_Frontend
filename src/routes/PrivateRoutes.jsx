import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateLayout from "../layouts/PrivateLayout";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import Gallery from "../pages/Gallery";
import News from "../pages/News";
import Player from "../pages/Player";
import Role from "../pages/Role";
import Profile from '../pages/Profile'
import Registration from '../pages/Registration'
import TeamRegistration from "../pages/TeamRegistration";
import Tournamentregistration from '../pages/Tournament'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/team-registration" element={<TeamRegistration />} />
        <Route path="/tournament-registration" element={<Tournamentregistration />} />
        <Route path="/role" element={<Role />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="news/*" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="player/*" element={<Player />} />
        
        <Route path="/contact" element={<ContactUs />} />
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;

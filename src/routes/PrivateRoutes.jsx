import { lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import PrivateLayout from '../layouts/PrivateLayout'
import TeamAddEdit from '../pages/TeamAddEdit'
import TeamProfile from '../pages/TeamProfile'
import TeamProfileDetail from '../pages/TeamProfileDetail'
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Dashboard from "../pages/Dashboard";
import Gallery from "../pages/Gallery";
import News from "../pages/News";
import Player from "../pages/Player";
import Role from "../pages/Role";
import Tournamentregistration from '../pages/Tournament'
import VisitorProfile from "../pages/Profile";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tournament-registration" element={<Tournamentregistration />} />
        <Route path="/Visitor-profile" element={<VisitorProfile />} />
        <Route path="/role" element={<Role />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="news/*" element={<News />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="player/*" element={<Player />} />
        <Route path='/team-add-edit' element={<TeamAddEdit />}/>
        <Route path='/team-profile' element={<TeamProfile />}/>
        <Route path='/team-profile-detail/:team_id' element={<TeamProfileDetail />}/>
        <Route path="/contact" element={<ContactUs />} />
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes

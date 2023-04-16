import React, { lazy } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import Loader from '../Component/Loader';
import { toast } from 'react-toastify';
import { authentication } from "../redux/actions/User";
import { useGetUserDataQuery } from "../services/user";

const PrivateRoutes = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { token } = useSelector((state) => state.user);

  const {data, isLoading, isError, error} = useGetUserDataQuery();
  
  React.useEffect(() => {
    if (isError) {
      toast.error(error?.data.message);
      navigate('/')
    }
    else if (data?.success) {
      dispatch(authentication(token, data.user));
    }
  }, [data]);

  if(isLoading){
    return <Loader/>
  }
  return (
    <Routes>
      <Route element={<PrivateLayout />}>
        <Route path="/match" element={<MatchsList />} />
        <Route path="/match-details/:id" element={<MatchDetails />} />
        <Route
          path="/profile-detail/:team_id"
          element={<TeamProfileDetail />}
        />
        <Route path="/visitor-profile" element={<VisitorProfile />} />
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

import React from 'react'
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdminNews from "./AdminNews";
import AddEditGallery from "./AdminGallery";
import PageNotFound from "../../pages/Error";
import AllTournaments from './AllTournaments';
import AllTeams from './AllTeams';

function Admin() {
  return (
    <Routes>
      <Route>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/news/*" element={<AdminNews />} />
        <Route path="/all-tournaments" element={<AllTournaments />} />
        <Route path="/all-teams" element={<AllTeams />} />
        <Route path="/gallery" element={<AddEditGallery />} />
        <Route path="/*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default Admin
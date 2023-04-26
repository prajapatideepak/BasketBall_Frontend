import React from 'react'
import { Route, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import AdminNews from "./AdminNews";
import AddEditGallery from "./AdminGallery";
import PageNotFound from "../../pages/Error";

function Admin() {
  return (
    <Routes>
        <Route>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/news/*" element={<AdminNews />} />
          <Route path="/gallery" element={<AddEditGallery />} />
          <Route path="/*" element={<PageNotFound />} />
        </Route>
    </Routes>
  )
}

export default Admin
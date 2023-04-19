import { Route, Routes } from "react-router-dom";

import "../App.css";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/AdminDashboard";
import AdminNews from "../pages/AdminNews";
import AddEditGallery from "../pages/AdminGallery";

const AdminRoutes = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="news/*" element={<AdminNews />} />
      <Route path="gallery" element={<AddEditGallery />} />
      <Route index element={<AdminDashboard />} />
    </Route>
  </Routes>
);

export default AdminRoutes;

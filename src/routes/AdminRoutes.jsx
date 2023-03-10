import { Route, Routes } from "react-router-dom";

import "../App.css";
import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/AdminDashboard";
import AdminNews from "../pages/AdminNews";

const AdminRoutes = () => (
  <Routes>
    <Route element={<AdminLayout />}>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="news/*" element={<AdminNews />} />
      <Route index element={<AdminDashboard />} />
    </Route>
  </Routes>
);

export default AdminRoutes;

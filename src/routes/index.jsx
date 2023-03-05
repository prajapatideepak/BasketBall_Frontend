import react from "react";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import AdminRoutes from "./adminRoutes";

export let currentUser = false;
const AppRoutes = () => {
  const { token } = useSelector((state) => state.userReducer);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {token ? (
            <>
              <Route path="/*" element={<PrivateRoutes />} />
            </>
          ) : (
            <>
              <Route path="/*" element={<PublicRoutes />} />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
        <Outlet />
      </BrowserRouter>
      <ToastContainer autoClose={3000} theme="colored" />
    </>
  );
};

export default AppRoutes;

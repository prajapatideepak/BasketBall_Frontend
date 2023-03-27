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
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import AdminRoutes from "./adminRoutes";
import { QueryClient, QueryClientProvider } from "react-query";

export let currentUser = false;
const AppRoutes = () => {
  // const { PlayerForm } = useSelector((state) => state.playerReducer);
  // const { token } = useSelector((state) => state.userReducer);
  const token = 'ksf'
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
};

export default AppRoutes;

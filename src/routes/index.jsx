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
import VerifyAccount from '../pages/VerifyAccount'
import { QueryClient, QueryClientProvider } from "react-query";

const AppRoutes = () => {
  // const { PlayerForm } = useSelector((state) => state.playerReducer);
  const { token } = useSelector((state) => state.user);
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/user/verify/:user_id/:token" element={<VerifyAccount />} />
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

import react from 'react'
import { Routes, Route, BrowserRouter, Navigate, Outlet } from 'react-router-dom'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'
import { ToastContainer ,  } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from "react-toastify";


const AppRoutes = () => {
    const currentUser = true;
    return (
        <>
            <BrowserRouter>
                <Routes>
                     {currentUser ? (
                            <>
                                <Route path='/*' element={<PrivateRoutes />} />
                            </>
                        ) : (
                            <>
                                <Route path='/*' element={<PublicRoutes />} />
                                <Route path='*' element={<Navigate to='/' />} />
                            </>
                    )}

                </Routes>
                <Outlet/>
            </BrowserRouter>
                        <ToastContainer autoClose={3000} theme='colored' />

        </>
    )
}

export default AppRoutes;

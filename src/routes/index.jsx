import react from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import PublicRoutes from './PublicRoutes'
import PrivateRoutes from './PrivateRoutes'


const AppRoutes = () => {
    const currentUser = false;
    return (
        <>
            <BrowserRouter>
                <Routes>
                     {currentUser ? (
                            <>
                                <Route path='/*' element={<PrivateRoutes />} />
                                <Route index element={<Navigate to='/' />} />
                            </>
                        ) : (
                            <>
                                <Route path='/*' element={<PublicRoutes />} />
                                <Route path='*' element={<Navigate to='/' />} />
                            </>
                        )}

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes




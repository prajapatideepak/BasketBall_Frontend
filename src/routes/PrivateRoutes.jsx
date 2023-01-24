import { lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import PrivateLayout from '../layouts/PrivateLayout'

const PrivateRoutes = () => {
    // const ProfilePage = lazy(() => import('../pages/profile'))
    const Dashboard = lazy(() => import('../pages/Dashboard'))
    // const Configurations = lazy(() => import('../pages/configurations'))
    // const Patients = lazy(() => import('../pages/patients'))
    // const Pharama = lazy(() => import('../pages/pharma'))

    return (
        <Routes>
            <Route element={<PrivateLayout />}>
                <Route path='' element={<Navigate to='/dashboard' />} />

                {/* <Route
                    path='profile/*'
                    element={
                        <SuspensedView>
                            <ProfilePage />
                        </SuspensedView>
                    }
                /> */}
                <Route
                    path='dashboard'
                    element={
                        <Dashboard />
                    }
                />
                {/* /> */}
            </Route>
        </Routes>
    )
}

export default PrivateRoutes

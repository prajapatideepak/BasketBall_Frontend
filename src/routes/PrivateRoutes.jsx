import { lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import PrivateLayout from '../layouts/PrivateLayout'
import Dashboard from '../pages/Dashboard'
import TeamRegistration from '../pages/TeamRegistration'

const PrivateRoutes = () => {

    return (
        <Routes>
            <Route element={<PrivateLayout />}>
                {/* <Route path='/' element={<Navigate to='/dashboard' />} /> */}

                {/* <Route
                    path='profile/*'
                    element={
                        <SuspensedView>
                            <ProfilePage />
                        </SuspensedView>
                    }
                /> */}
                <Route
                    path='/dashboard'
                    element={
                        <Dashboard />
                    }
                />
                <Route
                    path='/team-registration'
                    element={
                        <TeamRegistration />
                    }
                />
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default PrivateRoutes

import { lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import PrivateLayout from '../layouts/PrivateLayout'
import Dashboard from '../pages/Dashboard'
import TeamAddEdit from '../pages/TeamAddEdit'
import TeamProfile from '../pages/TeamProfile'
import TeamProfileDetail from '../pages/TeamProfileDetail'

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
                    path='/team-add-edit'
                    element={
                        <TeamAddEdit />
                    }
                />
                <Route
                    path='/team-profile'
                    element={
                        <TeamProfile />
                    }
                />
                <Route
                    path='/team-profile-detail/:team_id'
                    element={
                        <TeamProfileDetail />
                    }
                />
                <Route index element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default PrivateRoutes

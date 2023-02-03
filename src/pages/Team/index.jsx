import { lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import TeamAddEdit from './TeamAddEdit'
import TeamProfile from './TeamProfile'
import TeamProfileDetail from './TeamProfileDetail'
import TeamsList from './TeamsList'

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route>
        <Route path='/add-edit' element={<TeamAddEdit />}/>
        <Route path='/profile' element={<TeamProfile />}/>
        <Route path='/list' element={<TeamsList />}/>
        <Route path='/profile-detail/:team_id' element={<TeamProfileDetail />}/>
      </Route>
    </Routes>
  );
};

export default PrivateRoutes

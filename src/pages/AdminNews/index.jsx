import { lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import NewsList from './NewsList';


const AdminNews = () => {
    return (
        <Routes>
            <Route>
                <Route index element={<NewsList />} />
            </Route>
        </Routes>
    );
};

export default AdminNews

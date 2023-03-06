import { lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import NewsAddEdit from './NewsAddEdit';
import NewsList from './NewsList';


const AdminNews = () => {
    return (
        <Routes>
            <Route>
                <Route path='/add-edit' element={<NewsAddEdit />} />
                <Route index element={<NewsList />} />
            </Route>
        </Routes>
    );
};

export default AdminNews

import React from 'react';
import NewsPage from './NewsPage';
import {  Route, Routes } from 'react-router-dom'


const News = () => {
  return (
    <>
            <Routes>
                <Route >
                    <Route path='/' element={<NewsPage />} />
                    <Route index element={<NewsPage />} />
                </Route>
            </Routes>
        </>
  );
}

export default News;

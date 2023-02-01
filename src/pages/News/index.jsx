import React from "react";
import NewsPage from "./NewsPage";
import { Route, Routes } from "react-router-dom";
import NewsDetail from "./NewsDetail";

const News = () => {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<NewsPage />} />
          <Route path="/:id/:title" element={<NewsDetail />} />

          <Route index element={<NewsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default News;

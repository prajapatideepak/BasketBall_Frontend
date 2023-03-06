import { lazy } from 'react'
import { Route, Routes, Navigate , NavLink } from 'react-router-dom'


const NewsList = () => {
  return (
   <>
    News List
    <NavLink to="/news/add-edit">
    <button>Add</button>

    </NavLink>
   </>
  );
};

export default NewsList

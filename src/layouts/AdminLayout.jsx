/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, Outlet } from "react-router-dom";
import AdminSidebar from "../Component/AdminSidebar/AdminSidebar";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex h-screen  overflow-hidden ">
      {/* Sidebar */}
      <AdminSidebar />
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px" }}
          className="bg-white px-4  p-4"
        >
          {/* <h1 className="font-bold text-2xl ">Welcome, Deepak 🥳</h1> */}
          <div></div>
        </div>
        <main className="bg-gray-200 flex-1 p-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

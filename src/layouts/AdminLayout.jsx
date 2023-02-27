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

        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

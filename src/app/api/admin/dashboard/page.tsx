"use client"

import AdminNavBar from "@/components/admin/adminNavbar";
import AdminSidebar from "@/components/admin/adminSideBar";

export default function AdminDashboard() {
  return (
    <>
        <div className="flex h-screen">
            <AdminSidebar activeKey = "dashboard"/>
            <div className="flex-1 flex flex-col">
                <AdminNavBar page="Dashboard"/>
                <div className="flex-1 overflow-y-auto">
                </div>
            </div>
        </div>
    </>
  );
}
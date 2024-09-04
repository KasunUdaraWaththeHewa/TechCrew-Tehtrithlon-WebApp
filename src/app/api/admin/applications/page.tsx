"use client"

import AdminNavBar from "@/components/admin/adminNavbar";
import AdminSidebar from "@/components/admin/adminSideBar";

export default function AdminApplications() {
  return (
    <>
        <div className="flex h-screen">
            <AdminSidebar activeKey = "applications"/>
            <div className="flex-1 flex flex-col">
                <AdminNavBar page="Applications"/>
                <div className="flex-1 overflow-y-auto">
                </div>
            </div>
        </div>
    </>
  );
}
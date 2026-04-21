import React from "react";

export const metadata = {
  title: "Dashboard",
};

const layout = ({children}) => {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-800 text-white p-6 min-h-screen">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="space-y-2">
          <a href="/dashboard" className="block p-2 hover:bg-gray-700">
            Overview
          </a>
          <a href="/dashboard/stats" className="block p-2 hover:bg-gray-700">
            Statistics
          </a>
          <a href="/dashboard/settings" className="block p-2 hover:bg-gray-700">
            Settings
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};

export default layout;

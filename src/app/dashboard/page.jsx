import React from "react";

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-100 p-6 rounded">
          <p className="text-gray-600">Total Users</p>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-green-100 p-6 rounded">
          <p className="text-gray-600">Revenue</p>
          <p className="text-3xl font-bold">$45,678</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

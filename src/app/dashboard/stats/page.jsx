import React from "react";

const Statspage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Statistics</h1>
      <div className="space-y-4">
        <div className="bg-purple-100 p-4 rounded">
          <p>Page Views: 10,234</p>
        </div>
        <div className="bg-orange-100 p-4 rounded">
          <p>Unique Visitors: 5,432</p>
        </div>
      </div>
    </div>
  );
};

export default Statspage;

import React from "react";
import { Routes, Route } from "react-router-dom";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders"; // Check karo ye files bani hain ya nahi
import Holdings from "./Holdings";
import Funds from "./Funds";
import Positions from "./Positions";

function Dashboard() {
  return (
    <div className="flex flex-1 mt-14 overflow-hidden">
      {/* Sidebar: Hamesha dikhega */}
      <div className="w-112.5 shrink-0 border-r border-gray-100 h-full">
        <WatchList />
      </div>

      {/* Main Area: Yahan Routing hogi */}
      <main className="flex-1 overflow-y-auto bg-white p-8">
        <Routes>
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="funds" element={<Funds />} />
          <Route path="positions" element={<Positions />} />
          
          {/* Add more routes as needed */}
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
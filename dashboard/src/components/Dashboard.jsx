import React from "react";
import { Routes, Route } from "react-router-dom";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders"; 
import Holdings from "./Holdings";
import Funds from "./Funds";
import Positions from "./Positions";

function Dashboard() {
  return (
    /* flex-col: Mobile pe upar niche dikhega
       lg:flex-row: Badi screen (1024px+) pe side-by-side dikhega
    */
    <div className="flex flex-col lg:flex-row mt-14 overflow-hidden h-screen">
      
      {/* Sidebar / Watchlist Section */}
      <div className="w-full lg:w-112.5 shrink-0 border-b lg:border-b-0 lg:border-r border-gray-100 overflow-y-auto max-h-[50vh] lg:max-h-full">
        <WatchList />
      </div>

      {/* Main Area: Content Section */}
      <main className="flex-1 overflow-y-auto bg-white p-4 md:p-8">
        <Routes>
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="funds" element={<Funds />} />
          <Route path="positions" element={<Positions />} />
        </Routes>
      </main>
    </div>
  );
}

export default Dashboard;
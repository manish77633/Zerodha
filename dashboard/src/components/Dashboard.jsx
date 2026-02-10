import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import axios from "axios";
import GeneralContext from "./Context";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders"; 
import Holdings from "./Holdings";
import Funds from "./Funds";
import Positions from "./Positions";

function Dashboard() {
  const [holdings, setHoldings] = useState([]);
  const [positions, setPositions] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { refreshTrigger } = useContext(GeneralContext);
  const location = useLocation();

  // Check if we're on the main dashboard route (/)
  const isMainDashboard = location.pathname === '/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Parallel API calls for performance
        const [holdingsRes, positionsRes, ordersRes] = await Promise.all([
          axios.get("https://zerodha-u5jq.onrender.com/allHoldings"),
          axios.get("https://zerodha-u5jq.onrender.com/allPositions"),
          axios.get("https://zerodha-u5jq.onrender.com/allOrders")
        ]);
        setHoldings(holdingsRes.data);
        setPositions(positionsRes.data);
        setOrders(ordersRes.data);
        setLoading(false);
        console.log("Data Refreshed via Trigger!");
      } catch (err) {
        console.error("Fetch Error:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [refreshTrigger]); // Jab bhi BuyWindow se trigger aayega, ye chalega

  return (
    <div className="flex flex-col lg:flex-row overflow-hidden h-[calc(100vh-56px)]">
      
      {/* WatchList - Desktop: Always visible | Mobile: Only on main dashboard */}
      <div className={`
        w-full lg:w-112.5 shrink-0 
        border-b lg:border-b-0 lg:border-r border-gray-100 
        overflow-y-auto 
        ${isMainDashboard ? 'block' : 'hidden lg:block'}
        lg:max-h-full max-h-full
      `}>
        <WatchList />
      </div>

      {/* Main Content - Desktop: Always visible | Mobile: Hidden on main dashboard */}
      <main className={`
        flex-1 overflow-y-auto bg-white p-4 md:p-8
        ${isMainDashboard ? 'hidden lg:block' : 'block'}
      `}>
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
              <p className="text-gray-500">Loading...</p>
            </div>
          </div>
        ) : (
          <Routes>
            <Route index element={<Summary />} />
            <Route path="orders" element={<Orders allOrders={orders} />} />
            <Route path="holdings" element={<Holdings allHoldings={holdings} />} />
            <Route path="positions" element={<Positions allPositions={positions} />} />
            <Route path="funds" element={<Funds />} />
          </Routes>
        )}
      </main>
    </div>
  );
}

export default Dashboard;
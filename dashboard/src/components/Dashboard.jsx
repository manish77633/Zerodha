import React, { useState, useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { GeneralContext } from "./GeneralContext";
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
    <div className="flex flex-col lg:flex-row mt-14 overflow-hidden h-screen">
      <div className="w-full lg:w-112.5 shrink-0 border-b lg:border-b-0 lg:border-r border-gray-100 overflow-y-auto max-h-[50vh] lg:max-h-full">
        <WatchList />
      </div>

      <main className="flex-1 overflow-y-auto bg-white p-4 md:p-8">
        {loading ? (
          <div className="flex items-center justify-center h-full">Loading...</div>
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
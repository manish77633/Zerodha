import React from 'react';
import TopBar from './TopBar';
import Dashboard from './Dashboard';
import { GeneralContextProvider } from './GeneralContext';


function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar />
     // App.jsx mein aisa hona chahiye
      <GeneralContextProvider>
        <Dashboard />
      </GeneralContextProvider>
    </div>
  );
}

export default Home;
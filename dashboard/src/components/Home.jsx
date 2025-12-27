import React from 'react';
import TopBar from './TopBar';
import Dashboard from './Dashboard';

function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <TopBar />
      <Dashboard />
    </div>
  );
}

export default Home;
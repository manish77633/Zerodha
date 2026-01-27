import React, { useState, createContext } from "react";
import BuyWindow from "./BuyWindow"; 

export const GeneralContext = createContext();

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  
  // Data refresh karne ke liye trigger
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const refreshDashboard = () => setRefreshTrigger(prev => prev + 1);

  const handleOpenBuyWindow = (stock) => {
    setSelectedStock(stock);
    setIsBuyWindowOpen(true);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStock(null);
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        refreshDashboard,
        refreshTrigger,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyWindow selectedStock={selectedStock} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
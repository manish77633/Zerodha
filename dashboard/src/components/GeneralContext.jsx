import React, { useState } from "react";
import GeneralContext from "./Context";
import BuyWindow from "./BuyWindow"; 
import SellWindow from "./SellWindow";

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);
  
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
  
  const handleOpenSellWindow = (stock) => {
    setSelectedStock(stock);
    setIsSellWindowOpen(true);
  };
  
  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStock(null);
  };
  
  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
        refreshDashboard,
        refreshTrigger,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyWindow selectedStock={selectedStock} />}
      {isSellWindowOpen && <SellWindow selectedStock={selectedStock} />}
    </GeneralContext.Provider>
  );
};
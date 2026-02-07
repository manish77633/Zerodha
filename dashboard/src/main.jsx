
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GeneralContextProvider } from './components/GeneralContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>
);
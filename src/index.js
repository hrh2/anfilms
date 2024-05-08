import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/AdminDashboard.css'
import './styles/AdminMain.css'
import './styles/Budget.css'
import './styles/Cards.css'
import './styles/ContentTop.css'
import './styles/Financial.css'
import './styles/Loans.css'
import './styles/Report.css'
import './styles/Savings.css'
import './styles/Sidebar.css'
import './styles/Subscriptions.css'
import './styles/VideoRate.css'
import App from './App';
import { SidebarProvider } from './context/sidebarContext.jsx';


// @material-tailwind/react
import { ThemeProvider } from "@material-tailwind/react";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SidebarProvider>
          <App />
         </SidebarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// eslint-disable-next-line
import React, { useState } from 'react';
import {
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./hooks/Theme";
import './index.css'

import MainAuth from './services/auth/Main';
import Login from './views/auth/Login';
import Signup from './views/auth/Signup';
import MainLanding from './services/home/MainLanding';
import Home from './services/home/Home';
import MainHome from './views/home/MainHome'
import WatchVideo from './components/Cards/WatchVideo';
import Musics from './views/home/Musics'
import Videos from './views/home/Videos'
import CGI from './views/home/CGI'
import Movies from './views/home/Movies'
// import Account from './views/home/'

// Other Routes
import MainOthers from './services/others/MainOthers'
import Features from './views/other/Features'
import ContactUs from './views/other/ContactUs'
import AboutUs from './views/other/AboutUs'
import News from './views/other/News'
import Overview from './views/other/Overview'
import NotFound from './views/other/NotFound';
// Admin Components
import MainAdmin from './services/admin/AdminMain'
import AdminDashboard from './views/Admin/AdminDashboard'
import Subscriber from './views/Admin/Subscribers';
import AdminVideos from './views/Admin/Videos';
import AdminMusics from './views/Admin/Musics';
import Request from './views/Admin/Requests';
import Upload from './views/Admin/Upload';
import Account from './views/Admin/Account';  
import Settings from './views/Admin/Settings';
import AdminLogin from './views/auth/Admin';


function App() {
  const [theme, colorMode] = useMode(); 
  const isLocalUser = () => {
    const localUser = localStorage.getItem('anfilms_client_token');
    return localUser;
  };

  const isAdmin = () => {
    const vpFancyAdmin = localStorage.getItem('anfilms_admin_token');
    return vpFancyAdmin;
  };
  
  const redirectToLanding = () => <Navigate to="/landing" />;
  const redirectToLoginAsAdmin = () => <Navigate to="/auth/admin" />;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/landing" element={<MainLanding/>} />
            <Route path="/" exact element={isLocalUser()?<Home />:redirectToLanding()} >
              <Route path="/" element={<MainHome/>} />
              <Route path="/videos" element={<Videos/>} />
              <Route path="/musics" element={<Musics/>} />
              <Route path="/account" element={<Account/>} />
              <Route path="/movies" element={<Movies/>} />
              <Route path="/cgi" element={<CGI/>} />
              <Route path="/watch" element={<WatchVideo/>} />
            </Route>
            <Route path='/checkout' exact element={<MainOthers/>}>
                <Route path="/checkout/not-found" element={<NotFound/>} />
                <Route path="/checkout/features" element={<Features/>} />
                <Route path="/checkout/overview" element={<Overview/>} />
                <Route path="/checkout/aboutus" element={<AboutUs/>} />
                <Route path="/checkout/contactus" element={<ContactUs/>} />
                <Route path="/checkout/news" element={<News/>} />
            </Route>
            <Route path="/admin" exact element={isAdmin()?<MainAdmin />:redirectToLoginAsAdmin()} >
              <Route path="/admin" element={<AdminDashboard/>} />
              <Route path="/admin/subs" element={<Subscriber/>} />
              <Route path="/admin/videos" element={<AdminVideos/>} />
              <Route path="/admin/musics" element={<AdminMusics/>} />
              <Route path="/admin/request" element={<Request/>} />
              <Route path="/admin/upload" element={<Upload/>} />
              <Route path="/admin/account" element={<Account/>} />
              <Route path="/admin/settings" element={<Settings/>} />
            </Route>
            <Route path="/auth" exact element={<MainAuth />} >
              <Route path="/auth/login" element={<Login/>} />
              <Route path="/auth/signup" element={<Signup/>} />
            </Route>
            <Route path="/auth/admin" element={<AdminLogin/>} />
            <Route path="*" element={<Navigate to="/checkout/not-found" />} />
          </Routes>
        </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


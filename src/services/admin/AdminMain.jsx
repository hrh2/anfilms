import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/AdminSidebar';
import ContentTop from '../../components/ContentTop/ContentTop';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { HashLoader } from "react-spinners";


function App() {
  const [admin, setAdmin] = useState({});
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(true); 
  useEffect(() => {
    async function fetchVideos() {
      try {
        const token = localStorage.getItem("anfilms_admin_token");
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await axios.get('https://api-anfilms.onrender.com/api/v1/admin');
        setAdmin(response.data);
        setTimeout(() => {
          setLoader(false);
        }, 1000);
      } catch (error) {
        setError(error.response ? error.response.data.message : 'Network error the server is down.');
        setTimeout(() => {
          setLoader(false);
        }, 2000);
      }
    }

    fetchVideos();
  }, []);
  return (
    <>
      {loader?
      <div className="flex app justify-center items-center w-full">
          <HashLoader color="#36d7b7" />
        </div>:
       <div className='app'>
         <Sidebar admin={admin}/>
          <div className='main-content !p-0'>
            <ContentTop error={error} />
            <Outlet/>
          {/* <ContentMain /> */}
        </div>
      </div>}
    </>
  )
}

export default App
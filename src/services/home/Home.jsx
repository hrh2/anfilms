import { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar/HomeSidebar';
import ContentTop from '../../components/ContentTop/Home';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/HomeFooter'
import bgImage from "../../assets/bg.png"
import axios from 'axios';
import { HashLoader } from "react-spinners";
import { defaultServerUrl } from '../../data/servers';


function App() {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(true); 
  useEffect(() => {
    async function fetchVideos() {
      try {
        const token1 = localStorage.getItem("anfilms_client_token");
        const token2 = localStorage.getItem("anfilms_admin_token");
        let token;
        let url;
        if(token2){
          token =token2
          url =`${defaultServerUrl.accountActivities}/api/v1/admin`
        }else{
          token =token1
          url =`${defaultServerUrl.accountActivities}/api/v1/user`
        }
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await axios.get(url);
        setUser(response.data);
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
    <>{loader?
      <div className="flex app justify-center items-center w-full h-screen bg-black">
      <HashLoader color="#36d7b7" />
      </div>:
        <div className='app bg-cover bg-center' style={{backgroundImage:`url(${bgImage})`}}>
        <Sidebar user={user} />
        <div className='main-content !p-0'>
          <ContentTop error={error} user={user} />
          <Outlet/>
          {/* <ContentMain /> */}
          <Footer/>
        </div>
      </div>
      }
    </>
  )
}

export default App
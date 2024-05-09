import React from 'react';
import Profile from '../../components/Cards/Profile'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { HashLoader } from "react-spinners";
import Alert from '@mui/material/Alert';
import { personsImgs } from '../../hooks/images';
import { defaultServerUrl } from '../../data/servers';



const Account = () => {
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
          url =`${defaultServerUrl.authentication}/api/v1/admin`
        }else{
          token =token1
          url =`${defaultServerUrl.authentication}/api/v1/user`
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
  <div className="min-h-[60vh] !bg-slate-800 gap-8 grid md:grid-cols-2 grid-cols-1 p-8">
  {loader?
  <div className="flex app justify-center items-center w-full">
  <HashLoader color="#36d7b7" />
  </div>
  :<div
    className="bg-gray-100 relative shadow-xl overflow-hidden hover:shadow-2xl group rounded-xl p-5 transition-all duration-500 transform">
    <div className="items-center gap-4">
      <img src={user.image?user.image:personsImgs.person_one }
      className="w-32 group-hover:w-36 group-hover:h-36 h-32 object-center object-cover rounded-full transition-all duration-500 delay-500 transform"
     alt=''/>
      <Profile user={user}/>
    </div>
  </div>}
  {error&&<Alert severity="error">{error}</Alert>}
</div>
  );
};

export default Account;

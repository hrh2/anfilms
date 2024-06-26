import React, { useState, useEffect } from 'react';
import Video from '../Cards/LandingVideo';
import { HashLoader } from "react-spinners";
import { Alert, IconButton,Box } from '@mui/material';
import HomeFooter from '../Footer/HomeFooter'
import bgImage from "../../assets/bg.png"
import { RxReload } from "react-icons/rx";
import axios from 'axios';
import { defaultServerUrl } from '../../data/servers';
import Pricing from '../../views/home/Pricing';

export default function VideoColumns() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(true); // Start with loader shown initially

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await axios.get(`${defaultServerUrl.activities}/api/v1/videos/latest-files`);
        setVideos(response.data);
        setTimeout(() => {
          setLoader(false);
        }, 3000);
      } catch (error) {
        setError(error.response ? error.response.data.message : 'Network error: the server is down.');
        setTimeout(() => {
          setLoader(false);
        }, 6000);
      }
    }

    fetchVideos();
  }, []);

  const reloadPage = () => {
    setVideos([]); // Clear videos
    setLoader(false);
    window.location.reload();
  };
  return (
    <Box
    sx={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      overflowX: 'hidden',
      overflowY:'scroll'
    }}
    className=' absolute !w-full md:top-[40vh]  top-[40vh]'>
    <Box className = {`relative ${loader?'flex justify-center align-middle pt-[4rem]':'grid  md:grid-cols-4 sm:grid-cols-3 grid-cols-1 gap-8'}  !min-h-[50vh]  md:p-[2rem] p-[1.2rem] !pt-[4rem] !pb-[0px] bg-transparent`}>
      {!error && !loader && videos.length > 0 && (
        videos.map(video => (
          <Video key={video.id} vidtype={video.vidtype} videoId={video.id} videoName={video.name} />
        ))
      )}
      {loader && (
        <div className="flex justify-center items-center w-full">
          <HashLoader color="#36d7b7" />
        </div>
      )}
    </Box>
      <div className='!text-white justify-center font-sans text-center md:text-3xl text-2xl '>PRICING</div>
      <Pricing/>
      <HomeFooter/>
    </Box>
  )
}

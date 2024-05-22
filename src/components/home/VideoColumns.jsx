import React, { useState, useEffect } from 'react';
import Video from '../Cards/HomeVideo';
import { HashLoader } from "react-spinners";
import {Alert,IconButton} from '@mui/material';
import { RxReload } from "react-icons/rx";
import axios from 'axios';
import { defaultServerUrl } from '../../data/servers';

export default function VideoColumns({type}) {
  const [videos, setVideos] = useState([1]);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(true); // Start with loader shown initially

  useEffect(() => {
    async function fetchVideos() {
      try {
        const token = localStorage.getItem("anfilms_client_token");
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        const response = await axios.get(`${defaultServerUrl.activities}/api/v1/videos/type/${type}`);
        setTimeout(() => {
          setVideos(response.data);
          setLoader(false);
        }, 2000);
      } catch (error) {
        setError(error.response ? error.response.data.message : 'Network error the server is down.');
        setTimeout(() => {
          setLoader(false);
        }, 6000);
      }
    }

    fetchVideos();
  }, [type]);

  const reloadPage = () => {
    setVideos([]);
    setLoader(false);
    window.location.reload();
  };

  return (
    <div className='min-h-[50vh] grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:p-6 py-4 px-8 gap-9'>
      {(error || videos.length === 0) && (
        <div className="flex justify-center items-center w-full h-full">
          <div className=''>
          <Alert severity="error">{error || `No ${type} available.  Try again`}</Alert>
          <IconButton onClick={reloadPage} variant="contained" className="btn-reload">
            <RxReload size={30} />
          </IconButton>
          </div>
        </div>
      )}
      {!error && !loader && videos.length > 0 && (
        videos.map(video => (
          <Video key={video.id} vidtype={video.vidtype} videoId={video.id} videoName={video.name} />
        ))
      )}
      {loader && (
        <div className="flex justify-center items-center w-full h-full ">
          <HashLoader color="#36d7b7" />
        </div>
      )}
    </div>
  );
}

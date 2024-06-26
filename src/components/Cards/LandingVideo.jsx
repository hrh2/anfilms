import React, { useState, useEffect } from 'react';
import { MdOutlineTouchApp } from "react-icons/md";
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import queryString from 'query-string';
import { Typography} from '@mui/material';
import { streamServerUrl } from '../../data/servers';

export default function Video({ videoId, videoName, vidtype }) {
  const [posterLink, setPosterLink] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // const url = `/watch?${queryString.stringify(queryParams)}`;
  const url = `/auth/login`;

  useEffect(() => {
    // Fetch poster and video URLs
    const posterUrl = `${streamServerUrl.image}/api/v1/videos/poster/${encodeURIComponent(videoName)}`;
    const videoUrl = `${streamServerUrl.defaultPlayer}/api/v1/videos/stream/${encodeURIComponent(videoId)}`;
    setPosterLink(posterUrl);
    setVideoLink(videoUrl);
  }, [videoName, videoId]);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const handleMouseEnterVideo = () => {
    if (videoLoaded) {
      const videoElement = document.getElementById(videoId);
      if (videoElement.paused) {
        videoElement.play();
      }
    }
  };

  const handleMouseLeaveVideo = () => {
    if (videoLoaded) {
      const videoElement = document.getElementById(videoId);
      if (!videoElement.paused) {
        videoElement.pause();
      }
    }
  };
  return (
    <Link to={url} className="flex items-center align-middle justify-center">
    <div
      className="hover:scale-110 boxshadow-green md:h-[300px] min-h-[250px] bg-black relative bg-cover bg-center bg-no-repeat flex justify-center align-middle z-30 duration-[1s] rounded-xl"
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`poster-div w-full h-full bg-slate-900 absolute bg-cover bg-center bg-no-repeat z-20 transition-opacity duration-[2s] ${isHovered ? 'opacity-0 invisible' : 'visible'} rounded-xl overflow-hidden`}
        style={{ backgroundImage: `url(${posterLink})` }}
      >
          <MdOutlineTouchApp size={30} className='text-green-700 m-3' />                                                                                                                                                                                                                                                                                         
        <div className='md:!w-[40%] !w-[50%] absolute py-3 top-[-0.2rem] right-[-0.4rem] bg-gradient-to-t to-gray-900 from-green-700 px-2 rounded-bl-3xl bg-opacity-[0.7]'>
          <Typography color='white' fontWeight={700} className={`flex text-center justify-center `}>latest {vidtype}</Typography>
        </div>
        <div>

        </div>
      </div>
      
        <video
          title={videoName}
          src={videoLink}
          id={videoId}
          muted={true}
          playsInline={true}
          className="rounded-xl"
          onMouseEnter={handleMouseEnterVideo}
          onMouseLeave={handleMouseLeaveVideo}
          onLoadedMetadata={handleVideoLoaded}
          onLoadedData={handleVideoLoaded}
        >
        <Typography color='white' fontWeight={700}>
            Your browser does not support the video tag.
          </Typography>
        </video>
    </div>
  </Link>
  );
}

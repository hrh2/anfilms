import React, { useRef, useState, useEffect } from 'react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider} from '@vidstack/react';
import { Poster } from '@vidstack/react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Typography } from '@mui/material';
export default function WatchVideo() {
    const [posterLink, setPosterLink] = useState('');
    const [videoLink, setVideoLink] = useState('');
    const videoRef = useRef(null);
    const location = useLocation();
    const queryParams = queryString.parse(location.search);
    const { id, name } = queryParams;
    const getMimeType = (extension) => {
      switch (extension) {
          case 'mp4':
              return 'video/mp4';
          case 'mov':
              return 'video/quicktime';
          case 'avi':
              return 'video/x-msvideo';
          case 'webm':
              return 'video/webm';
          default:
              return 'video/mp4'; // Default to mp4 if extension not recognized
      }
  };
  const getFileExtension = (filename) => {
    return filename.split('.').pop();
  };
  
  const fileExtension = getFileExtension(id);
  const mimeType = getMimeType(fileExtension);
  
    useEffect(() => {
      async function fetchPoster() {
        try {
          // Construct the poster link similar to HTML
          const posterUrl = `https://api-anfilms.onrender.com/api/v1/videos/poster/${encodeURIComponent(name)}`;
          const videoUrl = `https://api-anfilms.onrender.com/api/v1/videos/stream/${encodeURIComponent(id)}`;
          setPosterLink(posterUrl);
          setVideoLink(videoUrl);
        } catch (error) {
          console.error('Error fetching poster:', error);
        }
      }
  
      fetchPoster();
    }, [id,name]);

    return (
    <div className='main-content-holder md:p-4 p-2 md:!flex min-h-[50vh]'>
      <div className="bg-black  xl:w-[60vw] md:w-[60vw] w-[90%] bg-cover bg-center bg-no-repeat flex justify-center align-middle z-30  duration-[1s]">
        <MediaPlayer
          ref={videoRef}
          load="eager"
          title="{videoName}"
          src={{ src:videoLink, type: mimeType }}
          streamType="live"
          controls={true}
        >
          <MediaProvider>
          <Poster
            className="vds-poster"
            src={posterLink}
            alt={name}
          />
          </MediaProvider>
        </MediaPlayer>
      </div>
      <div className=''>
        <Typography variant="h2" className="p-3 underline" color="#fff" fontWeight={900} >
            {name}
        </Typography>
      </div>
    </div>
    );
}

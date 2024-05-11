import React, { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { Typography } from '@mui/material';
import { streamServerUrl } from '../../data/servers';

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
                const posterUrl = `${streamServerUrl.image}/api/v1/videos/poster/${encodeURIComponent(name)}`;
                const videoUrl = `${streamServerUrl.watching}/api/v1/videos/stream/${encodeURIComponent(id)}`;

                // Set the default starting time to the first second
                setPosterLink(posterUrl);
                setVideoLink(videoUrl);
            } catch (error) {
                console.error('Error fetching poster:', error);
            }
        }

        fetchPoster();
    }, [id, name]);

    return (
        <div className='main-content-holder md:p-4 p-2 md:!flex min-h-[50vh]'>
            <div className="bg-black  xl:w-[60vw] md:w-[60vw] w-[90%] bg-cover bg-center bg-no-repeat flex justify-center align-middle z-30  duration-[1s]">
                <video
                    ref={videoRef}
                    title={videoName}
                    src={videoLink}
                    type={mimeType}
                    controls={true}
                    poster={posterLink} // Use the poster attribute
                />
            </div>
            <div className=''>
                <Typography variant="h2" className="p-3 underline" color="#fff" fontWeight={900} >
                    {name}
                </Typography>
            </div>
        </div>
    );
}

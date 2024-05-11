import React, { useEffect, useRef } from 'react';
import VideoColumns from '../../components/home/VideoColumns';
import { useParams } from 'react-router-dom';

export default function Videos() {
    const { videoType } = useParams();
    const prevVideoTypeRef = useRef(null);

    useEffect(() => {
        if (prevVideoTypeRef.current !== null && prevVideoTypeRef.current !== videoType) {
            window.location.reload(); // Reload the page only if videoType changes
        }
        prevVideoTypeRef.current = videoType; // Update the previous videoType
    }, [videoType]);

    return (
        <div className="main-content-holder !p-4">
            <VideoColumns type={videoType} />
        </div>
    );
}

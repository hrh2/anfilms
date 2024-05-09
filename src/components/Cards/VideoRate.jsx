import { useState, useEffect } from 'react';
import axios from 'axios';
import { HashLoader } from "react-spinners";
import Alert from '@mui/material/Alert';
import { defaultServerUrl, streamServerUrl} from '../../data/servers';


const VideoRate = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(true); // Start with loader shown initially

  useEffect(() => {
    async function fetchVideos() {
      try {
        const token = localStorage.getItem("anfilms_admin_token");
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        const response = await axios.get(`${defaultServerUrl.activities}/api/v1/videos/video-files`);
        setVideos(response.data);
        setTimeout(() => {
          setLoader(false);
        }, 800);
      } catch (error) {
        setError(error.response.data.message);
        setTimeout(() => {
          setLoader(false);
        }, 6000);
      }
    }

    fetchVideos();
  }, []);

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className="grid-one-item grid-common grid-c2">
      {error && (
        <div className="flex justify-center items-center w-full h-full">
          <Alert severity="error">{error}</Alert>
          <button onClick={reloadPage} className="btn-reload">Reload Page</button>
        </div>
      )}
      {!error && (
        <>
          <div className="grid-c-title">
            <h3 className="grid-c-title-text">Video Rating</h3>
          </div>
          <div className="grid-content">
            <div className="grid-items">
              {loader ? (
                <div className="flex justify-center items-center w-full h-full">
                  <HashLoader color="#36d7b7" />
                </div>
              ) : (
                videos.length === 0 ? (
                  <p>No videos available.</p>
                ) : (
                  videos.map((video) => (
                    <div className="grid-item" key={video.id}>
                      <div className="grid-item-l">
                        <div className="w-[3rem] rounded-md img-fit-cover">
                          <img src={`${streamServerUrl.image}/api/v1/videos/poster/${encodeURIComponent(video.name)}`} alt={video.name} />
                        </div>
                        <p className="text">{video.name} <span>{video.vidtype}</span></p>
                      </div>
                      <div className="grid-item-r">
                        <span className="text-scarlet">{video.amount}20 %</span>
                      </div>
                    </div>
                  ))
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoRate;

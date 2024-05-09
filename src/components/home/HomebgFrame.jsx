import React, { useRef, useState, useEffect } from 'react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { Box,Typography } from '@mui/material';
import bgvideo from '../../assets/Home6.mp4';
import bgvideo1 from '../../assets/Home5.mp4';
import bgvideo2 from '../../assets/Home4.mp4';
import bgvideo3 from '../../assets/Home3.mp4';
import Logo from "../../assets/anfilms.png"
import { Link } from 'react-router-dom';

export default function HomebgFrame() {
  const videoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(bgvideo);

  useEffect(() => {
    const currentMinute = new Date().getMinutes();

    // Define the time ranges and corresponding videos
    const timeRanges = [
      { start: 0, end: 15, video: bgvideo },
      { start: 15, end: 30, video: bgvideo1 },
      { start: 30, end: 45, video: bgvideo2 },
      { start: 45, end: 60, video: bgvideo3 }
    ];
    const selectedVideo = timeRanges.find(range => currentMinute >= range.start && currentMinute < range.end);

    // Set the current video

    if (selectedVideo) {
      setCurrentVideo(selectedVideo.video);
    }
  }, []); // Run once on component mount

  return (
    <div className="md:w-full sm:w-full max-w-full md:h-[55vh] h-[55vh] bg-transparent absolute top-[0] bg-cover bg-center bg-no-repeat flex justify-center align-middle duration-[1s] !z-10 overflow-hidden">
      <Box className="md:w-full sm:w-full w-[200vw] px-4 md:pt-[1.7rem] pt-[8rem] md:h-[60vh] h-[57vh] absolute top-0 left-0 bg-gradient-to-r from-[#000000] md:via-[#000000e4] sm:via-[#000000e4]  to-gray-900/30 z-40 duration-[2s] overflow-hidden">
          <div className="md:w-[15rem] !w-[60%] md:!static md:visible invisible absolute left-0 top-0 aspect-square" >
            <img src={Logo} alt="logo" />
          </div>
          <div className='absolute md:top-[10rem] md:left-[35vw]  font-bold left-[8%] !text-white grid grid-cols-1 md:gap-6  gap-4'>
              <Typography variant='h4' fontWeight={600}>
                  Welcome to <i><Link className='text-green-600 md:text-2xl' to='/' >an-films</Link></i>
              </Typography>
              <Typography variant='h3' className='pl-[3rem]' fontWeight={900}>
                  Download Unlimited<br/>
                  Movies,Music,Videos<br/>
                  and More Content
              </Typography>
              <Typography variant='h7'>
                 Enjoy Exclusive Music Video and Live shows<br/>
                 Subscribe <Link className='text-green-600 text-xl' to='/' >an-films</Link> now
              </Typography>
          </div>
      </Box>
      <MediaPlayer
        ref={videoRef}
        load="eager"
        title="Sprite Fight"
        bg-black="true"
        src={currentVideo}
        muted={true} // Start the video muted
        autoPlay={true}
        loop={true}
        controls={false}
        playsInline={true}
        className="md:w-full sm:w-full !w-[300vw] relative top-[-3rem] z-20"
      >
        <MediaProvider className=""></MediaProvider>
      </MediaPlayer>
    </div>
  );
}

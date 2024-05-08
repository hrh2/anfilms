import React, { useState } from "react";
import AdminDragPoster from '../../components/Cards/AdminDragPoster';
import AdminDragVideo from '../../components/Cards/AdminDragVideo';
import { FileUploader } from "react-drag-drop-files";
import { Radio } from "@material-tailwind/react";
import { Typography, Button } from "@mui/material";
import Alert from '@mui/material/Alert';
import Axios from "axios";
import { ImCloudUpload } from "react-icons/im";
import { HashLoader } from "react-spinners";



const posterTypes = ["JPG", "PNG", "GIF","JPEG"];
const videoTypes = ["MP4", "WEBM", "OGV"];

export default function Upload() {
  const [videoFile, setVideoFile] = useState(null);
  const [posterFile, setPosterFile] = useState(null);
  const [error,setError] = useState(null);
  const [success,setSuccess] = useState(null);
  const [loader, setLoader] = useState(false);

  const [videoData, setVideoData] = useState({
    name: "",
    description: "",
    type: "",
    constraint: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setVideoData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleVideoChange = (file) => {
    setVideoFile(file);
  };

  const handlePosterChange = (file) => {
    setPosterFile(file);
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    setSuccess(null)
    setError(null)
    setLoader(true);
    try {
      const formData = new FormData();
      formData.append("video", videoFile);
      formData.append("poster", posterFile);
      formData.append("name", videoData.name);
      formData.append("description", videoData.description);
      formData.append("type", videoData.type);
      formData.append("constraint", videoData.constraint);
      const token = localStorage.getItem("anfilms_admin_token");
      Axios.defaults.headers.common.Authorization = `Bearer ${token}`
      const response = await Axios.post(
        "https://api-anfilms.onrender.com/api/v1/videos/uploads",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        }
      );
      setTimeout(()=>{
        window.location = "/admin";
      },1000)
      setSuccess(response.data.message);
    } catch (error) {
      console.error("Error uploading file:", error);
      setLoader(false)
      setError(error.message);
    }
  };
  return (
    <div>
       <form className="main-content-holder md:p-4 p-2" onSubmit={handleSubmission}>
        <div className="content-grid-one gap-3">
        <div className="grid-common grid-c1">
            <div className="grid-c-title">
              <h3 className="grid-c-title-text">Video Details</h3>
            </div>
            <div className="md:p-6 p-3 grid grid-cols-1 gap-4 bg-white rounded-md" >
           {/* Name input */}
           <input
            type="text"
            name="name"
            value={videoData.name}
            onChange={handleChange}
            placeholder="Video Name"
            className="p-3 bg-transparent border-b-2"
            required
            />
           {/* Description */}
           <textarea
            type="text"
            name="description"
            value={videoData.description}
            onChange={handleChange}
            className="p-3 bg-transparent border-b-2"
            placeholder="Description"
            required
            ></textarea>
        <h3>Type</h3>
        <div className='grid grid-cols-2 gap-y-4'>
          <div className='flex gap-2'>
              <Radio name="type" id="" onChange={handleChange} value="Video" required={true}/>
              Edited Video
          </div>
          <div className='flex gap-2'>
              <Radio name="type" id="" onChange={handleChange} value="CGI" required={true}/>
              CGI
          </div>
          <div className='flex gap-2'>
              <Radio name="type" id="" onChange={handleChange} value="Music" required={true}/>
              Music
          </div>
          <div className='flex gap-2'>
              <Radio name="type" id="" onChange={handleChange} value="Movie" required={true}/>
              Movies
          </div>
        </div>
        </div>
        </div>
          {videoFile && <AdminDragVideo video={videoFile} />}
          {posterFile && <AdminDragPoster poster={posterFile} />}
        
            {/* <Subscribers /> */}
            <div className="grid-two-item grid-common grid-c4">
              <div className="grid-c-title">
                <h3 className="grid-c-title-text">Constraints</h3>
              </div>
              <div className="grid-c4-content bg-jet">
                <div className="grid-items grid grid-cols-1">
                {/* Contents */}
                <Radio
                    label={
                      <Typography
                        variant="small"
                        color="black"
                        className="flex items-center font-normal"
                      >Require Subscription</Typography>}
                    containerProps={{ className: "-ml-2.5" }}
                     name="constraint"
                     value="subscription"
                     onChange={handleChange}
                     required={true}
                />
                <Radio
                    label={
                      <Typography
                        variant="small"
                        color="black"
                        className="flex items-center font-normal"
                      >Require Login</Typography>}
                    containerProps={{ className: "-ml-2.5" }}
                    name="constraint"
                    value="login"
                    onChange={handleChange}
                    required={true}
                />
                <Radio
                    label={
                      <Typography
                        variant="small"
                        color="black"
                        className="flex items-center font-normal"
                      >Free</Typography>}
                    containerProps={{ className: "-ml-2.5" }}
                    name="constraint"
                    value="free"
                    onChange={handleChange}
                    required={true}
                />
                {/* Contents */}
                </div>
              </div>
            </div>
            {/* Subscribers */}
            <div className="grid-two-item">
              <div className="subgrid-two">
                <div className="subgrid-two-item grid-common grid-c5">
                  <div className="grid-c-title">
                    <h3 className="grid-c-title-text">Upload Files</h3>
                  </div>
                  <div className="grid-c5-content">
                    <div className="grid-items">
                      {/* video */}
                      <div className=''>
                        <Typography>
                          Image
                        </Typography>
                        <FileUploader  handleChange={handlePosterChange}   name="posterFile" types={posterTypes} label="Upload or Drop a poster image for your video" required/>
                      </div>
                      <div className=''>
                        <Typography>
                          Video
                        </Typography>
                        <FileUploader handleChange={handleVideoChange}  name="videoFile" types={videoTypes} label="Upload or Drop your video" required/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-two-item grid-common grid-c4 gap-4">
              <div className="grid-c-title">
                <h3 className="grid-c-title-text">Concerns</h3>
              </div>
              <div>
              <Alert severity="info">Please make sure you provide related info for your video </Alert>
              </div>
              <div className="p-4 flex justify-between">
                <Button type="submit" variant="contained"  startIcon={<ImCloudUpload />}>
                  Upload
                </Button>
                {loader&&<HashLoader color="#36d7b7" />}
              </div>
              {error&&<Alert severity="error">{error}</Alert>}
              {success&&<Alert severity="success">{success}</Alert>}
            </div>
        </div>
      </form>
    </div>
  )
}

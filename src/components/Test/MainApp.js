// App.js
import React, { useState } from 'react';
import axios from 'axios';
import FileList from './components/Test/FileList';
import VideoPlayer from './components/Test/VideoPlayer';

const App = () => {
  const [file, setFile] = useState(null);
  const [selectedFileId, setSelectedFileId] = useState(null);
  
  const handleSelectFile = (fileId) => {
        setSelectedFileId(fileId);
    };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      const response = await axios.post('https://api-anfilms.onrender.com/api/v1/videos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <FileList onSelectFile={handleSelectFile} />
      <div className="video-player">
            {selectedFileId && <VideoPlayer fileId={selectedFileId} />}
      </div>
    </div>
  );
};

export default App;

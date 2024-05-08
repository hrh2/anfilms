import React, { useState } from 'react';
import FileList from './components/FileList';
import VideoPlayer from './components/VideoPlayer';


const MainComponent = () => {
    const [selectedFileId, setSelectedFileId] = useState(null);

    const handleSelectFile = (fileId) => {
        setSelectedFileId(fileId);
    };

    return (
        <div>
            <h1>Video Player App</h1>
            <div className="container">
                <div className="file-list">
                    <FileList onSelectFile={handleSelectFile} />
                </div>
                <div className="video-player">
                    {selectedFileId && <VideoPlayer fileId={selectedFileId} />}
                </div>
            </div>
        </div>
    );
};

export default MainComponent;


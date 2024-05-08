// VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ fileId }) => {
    const getFileExtension = (filename) => {
        return filename.split('.').pop();
    };

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
            // Add support for more video formats as needed
            default:
                return 'video/mp4'; // Default to mp4 if extension not recognized
        }
    };

    const fileExtension = getFileExtension(fileId);
    const mimeType = getMimeType(fileExtension);

    return (
        <div>
            <video controls>
                <source src={`https://api-anfilms.onrender.com/api/v1/videos/stream/${fileId}`} type={mimeType} />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;

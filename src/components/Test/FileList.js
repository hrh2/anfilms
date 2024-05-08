// FileList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileList = ({ onSelectFile }) => {
    const [fileIds, setFileIds] = useState([]);

    useEffect(() => {
        const fetchFileIds = async () => {
            try {
                const response = await axios.get('https://api-anfilms.onrender.com/api/v1/videos/files');
                setFileIds(response.data);
            } catch (error) {
                console.error('Error fetching file IDs:', error);
            }
        };

        fetchFileIds();
    }, []);

    return (
        <div>
            <h2>Video Files</h2>
            <ul>
                {fileIds.map(fileId => (
                    <li key={fileId} onClick={() => onSelectFile(fileId)}>
                        {fileId}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileList;

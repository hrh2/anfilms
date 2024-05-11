import React, { useState, useEffect } from 'react';
import { HashLoader } from "react-spinners";
import { Alert, IconButton } from '@mui/material';
import axios from 'axios';
import { defaultServerUrl } from '../../data/servers';

const Financial = () => {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(true); // Start with loader shown initially

    useEffect(() => {
        async function fetchMessages() {
            try {
                const token = localStorage.getItem("anfilms_client_token");
                axios.defaults.headers.common.Authorization = `Bearer ${token}`;
                const response = await axios.get(`${defaultServerUrl.activities}/api/v1/message/us`);
                setMessages(response.data);
                setLoader(false);
            } catch (error) {
                setError(error.response ? error.response.data.message : 'Network error: the server is down.');
                setLoader(false);
            }
        }

        fetchMessages();
    }, []);

    return (
        <div className="subgrid-two-item grid-common grid-c8">
            <div className="grid-c-title">
                <h3 className="grid-c-title-text">Client Feedbacks</h3>
                {loader && <HashLoader />} {/* Show loader if loading */}
            </div>
            <div className="grid-c8-content">
                {error && <Alert severity="error">{error}</Alert>} {/* Show error if occurred */}
                {messages.length === 0 ? (
                    <p className="text text-silver-v1">No messages yet.....</p>
                ) : (
                    <ul>
                        {messages.map(message => (
                            <li key={message._id} className="border border-gray-300 p-4 mb-4 rounded-md">
                                <div>
                                    <p className="text-lg font-semibold">{message.name}</p>
                                    <p className="text-sm text-gray-500">{message.email}</p>
                                    <p className="mt-2">{message.message}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Financial;

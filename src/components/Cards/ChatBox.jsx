import React, { useState, useEffect } from 'react';
import { IoLogoSnapchat } from "react-icons/io";
import io from 'socket.io-client';
import { MdOutlineOnlinePrediction } from "react-icons/md";
import {IoCloudOfflineSharp, IoSend} from "react-icons/io5";
import { defaultServerUrl } from '../../data/servers';


const socket = io(defaultServerUrl.authentication); // Replace with your server URL

const Chatbox = ({user}) => {
    const [isChatboxOpen, setIsChatboxOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');
    const [online, setOnline] = useState(false);
    const [loader, setLoader] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        socket.on('connect', () => {
            setOnline(true);
        });

        socket.on('disconnect', () => {
            setOnline(false);
        });

        socket.on('new_message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        socket.on('error_message', (data) => {
            setLoader(false);
            setError(data.message);
        });

        socket.on('message_sent', (data) => {
            setLoader(false);
            setSuccess(data.message);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('new_message');
            socket.off('error_message');
            socket.off('message_sent');
        };
    }, []);

    const toggleChatbox = () => {
        setIsChatboxOpen(!isChatboxOpen);
    };

    const handleSendMessage = () => {
        if (userMessage.trim() !== '') {
            setLoader(true);
            const message = { name:'User',message: userMessage, email: user.email };
            socket.emit('send_message', message);
            setMessages([...messages, message]);
            setUserMessage('');
        }
    };

    return (
        <div className="static">
            <button
                id="open-chat"
                onClick={toggleChatbox}
                className="!text-white py-2 px-4 rounded-md hover:!text-green-600 transition duration-300 flex items-center"
            >
                <IoLogoSnapchat size={30} />
            </button>
            <div
                id="chat-container"
                className={`absolute top-24 right-4 md:!w-96 !w-[80%] z-40 ${isChatboxOpen ? '' : 'hidden'}`}
            >
                <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
                    <div className="p-4 border-b bg-green-700 text-white rounded-t-lg flex justify-between items-center">
                        <p className="text-lg font-semibold text-[#fff]">To us</p>
                        <div className="flex items-center gap-2">
                            {online ? (
                                <MdOutlineOnlinePrediction size={20} className="text-green-400" title="Connected" />
                            ) : (
                                <IoCloudOfflineSharp size={20} className="text-red-400" title="Disconnected" />
                            )}
                            <button
                                id="close-chat"
                                onClick={toggleChatbox}
                                className="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                            >
                                <IoLogoSnapchat size={30} />
                            </button>
                        </div>
                    </div>

                    <div id="chatbox" className="p-4 h-80 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`mb-2 ${msg.sender === 'user' ? 'text-right' : ''}`}
                            >
                                <p
                                    className={`${
                                        msg.sender === 'user'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-200 text-gray-700'
                                    } rounded-lg py-2 px-4 inline-block`}
                                >
                                    {msg.text}
                                </p>
                            </div>
                        ))}
                        {loader && (
                            <div className="p-4 text-center">
                                <p>Sending message...</p>
                            </div>
                        )}
                        {success && (
                            <div className="p-4 text-center text-green-500">
                                <p>{success}</p>
                            </div>
                        )}
                        {error && (
                            <div className="p-4 text-center text-red-500">
                                <p>{error}</p>
                            </div>
                        )}
                    </div>
                    <div className="p-4 border-t flex">
                        <input
                            id="user-input"
                            type="text"
                            value={userMessage}
                            onChange={(e) => setUserMessage(e.target.value)}
                            placeholder="Type a message"
                            className="w-full text-black px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') {
                                    handleSendMessage();
                                }
                            }}
                        />
                        <button
                            id="send-button"
                            onClick={handleSendMessage}
                            className="!text-green-500  px-4 py-2 rounded-r-md hover:!text-green-600 transition duration-300"
                        >
                            <IoSend size={40} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbox;

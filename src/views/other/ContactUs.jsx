import React, { useState, useEffect } from 'react';
import { contactus } from '../../data/data';
import Alert from '@mui/material/Alert';
import { HashLoader } from "react-spinners";
import { io } from 'socket.io-client';
import { defaultServerUrl } from "../../data/servers";

const socket = io(defaultServerUrl.authentication); // Replace with your server's URL and port

export default function ContactUs() {
  const [data, setData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });

    socket.on('error_message', (data) => {
      setLoader(false);
      setError(data.message);
    });

    socket.on('message_sent', (data) => {
      setLoader(false);
      setSuccess(data.message);
      setData({
        email: '',
        name: '',
        message: '',
      });
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('error_message');
      socket.off('message_sent');
    };
  }, []);

  const handleChange = (event) => {
    setError('');
    setSuccess('');
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    setError('');
    setSuccess('');

    socket.emit('send_message', data);
  };

  return (
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="relative h-[300px] overflow-hidden bg-center bg-cover bg-no-repeat bg-[url('https://www.completeassetfinance.com.au/wp-content/uploads/2020/01/6-min.png')] rounded-t-lg"></div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[hsla(0,0%,5%,0.7)] shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                  <form className="!text-white" onSubmit={handleSubmit}>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                          type="text"
                          value={data.name}
                          onChange={handleChange}
                          name="name"
                          className="peer block min-h-[auto] w-full !text-[#fff] border-b-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-0 motion-reduce placeholder:text-gray-800 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleInput90"
                          placeholder="Name"
                      />
                      <label
                          className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-800 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce peer-focus:text-primary"
                          htmlFor="exampleInput90"
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                          type="email"
                          value={data.email}
                          onChange={handleChange}
                          name="email"
                          className="peer block min-h-[auto] w-full !text-[#fff] border-b-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-0 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-0 motion-reduce placeholder:text-gray-800 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleInput91"
                          placeholder="Email address"
                      />
                      <label
                          className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-800 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce peer-focus:text-primary"
                          htmlFor="exampleInput91"
                      >
                        Email address
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                    <textarea
                        value={data.message}
                        onChange={handleChange}
                        name="message"
                        className="peer font-bold block min-h-[auto] w-full !text-[#fff] border-b-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce placeholder:text-gray-800 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        placeholder="Your message"
                        required={true}
                    ></textarea>
                      <label
                          htmlFor="exampleFormControlTextarea1"
                          className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-800 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce peer-focus:text-primary"
                      >
                        Message
                      </label>
                    </div>
                    <div className="mb-6 min-h-[1.5rem] justify-center pl-[1.5rem] flex">
                      {loader && <HashLoader color="#36d7b7" />}
                      {success && <Alert severity="success">{success}</Alert>}
                      {error && <Alert severity="error">{error}</Alert>}
                    </div>
                    {!loader && (
                        <button
                            type="submit"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            className="mb-6 !py-3 inline-block w-full rounded bg-gray-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal !text-white transition duration-150 ease-in-out hover:bg-gray-600 focus:bg-gray-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0"
                        >
                          Send
                        </button>
                    )}
                  </form>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 grid md:grid-cols-2 grid-cols-1">
                  {contactus.map((contact) => (
                      <div key={contact.title}>
                        <div className="flex flex-wrap">
                          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                            <div className="flex items-start">
                              <div className="shrink-0">
                                <div className="inline-block !text-[#000] rounded-md bg-gray-100 p-4 text-primary">
                                  {contact.label}
                                </div>
                              </div>
                              <div className="px-2">
                                <p className="font-bold !text-white">
                                  {contact.title}
                                </p>
                                <p className="!text-[#ffffffd8]">
                                  {contact.email}
                                </p>
                                <p className="!text-[#ffffffd8]">
                                  {contact.phone}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}

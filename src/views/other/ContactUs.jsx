import React, {useState} from 'react'
import {contactus} from '../../data/data'
import Alert from '@mui/material/Alert';
import Axios from 'axios';
import { HashLoader } from "react-spinners";
import {defaultServerUrl} from "../../data/servers";



export default function ContactUs() {
  const [data, setData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    setError('')
    setSuccess('')
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // prevent the default form submission behavior
    setLoader(true);
    try {
      const response = await Axios.post(`${defaultServerUrl.authentication}/api/v1/message/us`, data);
      const token = response.data.token;
      localStorage.setItem('anfilms_client_token', token);
      setSuccess(response.data.message);
      setTimeout(()=>{
        setLoader(false)
        event.clear();
      },1000)
    } catch (error) {
      setLoader(false)
      setError(error.message?error.message:error.response.data.message);
    }
  };
  return (
<div className="container my-24 mx-auto md:px-6">
  <section className="mb-32">
    <div className="relative h-[300px] overflow-hidden bg-center bg-cover  bg-no-repeat bg-[url('https://www.completeassetfinance.com.au/wp-content/uploads/2020/01/6-min.png')] rounded-t-lg"></div>
    <div className="container px-6 md:px-12">
      <div className="block rounded-lg  px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] bg-[hsla(0,0%,5%,0.7)] shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <form className='!text-white'>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input type="text" value={data.name} onChange={handleChange} name="name"   className="peer block min-h-[auto] w-full !text-[#fff]  border-b-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce placeholder:text-gray-800 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleInput90" placeholder="Name" />
                <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-800 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce peer-focus:text-primary" for="exampleInput90">Name
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input type="email" value={data.email} onChange={handleChange} name="email" className="peer block min-h-[auto] w-full !text-[#fff]  border-b-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce placeholder:text-gray-800 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleInput91" placeholder="Email address" />
                <label className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-800 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce peer-focus:text-primary" for="exampleInput91">Email address
                </label>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <textarea value={data.message} onChange={handleChange} name="message" className="peer font-bold block min-h-[auto] w-full !text-[#fff] border-b-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce placeholder:text-gray-800 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlTextarea1" rows="3" placeholder="Your message" required={true}></textarea>
                <label for="exampleFormControlTextarea1" className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-gray-800 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce peer-focus:text-primary">Message</label>
              </div>
              <div className="mb-6 min-h-[1.5rem] justify-center pl-[1.5rem] flex">
                {/*<input type="checkbox" value="" id="exampleCheck96" className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid  outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-gray checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100  checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent border-gray-800 checked:border-primary checked:bg-gray focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"  checked />*/}
                {/*<label className="inline-block pl-[0.15rem] hover:cursor-pointer" for="exampleCheck96">*/}
                {/*  Send me a copy of this message*/}
                {/*</label>*/}
                {loader&&<HashLoader color="#36d7b7"/>}
                {success&&<Alert severity="success">{success}</Alert>}
                {error&&<Alert severity="error">{error}</Alert>}
              </div>
              {!loader&&<button type="button" data-te-ripple-init data-te-ripple-color="light" className="mb-6 !py-3 inline-block w-full rounded bg-gray-700 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal !text-white  transition duration-150 ease-in-out hover:bg-gray-600  focus:bg-gray-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-gray-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] lg:mb-0">
                Send
              </button>}
            </form>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 grid md:grid-cols-2 grid-cols-1">
            {contactus.map((contact)=>(
                 <div>
                 <div className="flex flex-wrap">
                   <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                     <div className="flex items-start">
                       <div className="shrink-0">
                         <div className="inline-block !text-[#000] rounded-md bg-gray-100 p-4 text-primary">
                           {contact.label}
                         </div>
                       </div>
                       <div className="px-2">
                         <p className=" font-bold !text-white">
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
</div>)
}

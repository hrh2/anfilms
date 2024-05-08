import React,{useState} from "react";
import Alert from '@mui/material/Alert';
import Axios from 'axios';
import { HashLoader } from "react-spinners";
import { RiShieldUserFill } from "react-icons/ri";
import { MdOutlineKey } from "react-icons/md";
import bgImage from "../../assets/bg.png"



export default function Admin() {
    const [data, setData] = useState({
        email_phone: '',
        password: '',
    });
    const [error, setError] = useState('First login to access the dashboard');
    const [loader, setLoader] = useState(false);
    const handleChange = (event) => {
    setError('')
    const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const handleSubmit = async (event) => {
        event.preventDefault(); // prevent the default form submission behavior
        setLoader(true);
        try {
             const response = await Axios.post('https://api-anfilms.onrender.com/api/v1/login/admin', data);
             const token = response.data.token;
             localStorage.setItem('anfilms_admin_token', token);
             localStorage.setItem('anfilms_client_token', token);
            setTimeout(()=>{
              window.location = "/admin";
            },2000)
        } catch (error) {
          setTimeout(()=>{
            setLoader(false);
          },2000)
          setError(error.response.data.message);
        }
   };
  return (
    <div className="w-full relative min-h-[100vh]  flex align-middle justify-center bg-cover bg-center px-4" style={{backgroundImage:`url(${bgImage})`}}>
         <form id="whoobe-t7qyk" onSubmit={handleSubmit} className="justify-center items-center w-full shadow rounded-lg bg-white px-6 flex flex-col md:w-1/2 lg:w-1/3 m-auto">
            <h2 className="text-2xl my-4">Admin <i className="text-3xl text-green-600 font-extrabold ">(An-films)</i></h2>
            <h4 className="text-md my-4 text-gray-400">Login</h4>
			<div id="whoobe-h90kl" className="w-full p-2 justify-start flex flex-col">
				<div id="whoobe-7izhv" className=" flex flex-row">
					<span id="whoobe-plfl9" className="z-highest rounded-l-lg w-10 h-16 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
						<RiShieldUserFill  size={25}/>
					</span>
					<input  type="text"
					        value={data.email_phone} 
					        onChange={handleChange}
					        className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-400 w-full pl-1" id="email_phone2" name="email_phone" 
					        placeholder="Email or Phone" 
					        disabled={loader}
					        required="true"/>
				</div>
				
				<div id="whoobe-l6k6r" className="my-4 flex flex-row">
					<span id="whoobe-4occ6" className="z-highest rounded-l-lg w-10 h-16 flex justify-center items-center text-2xl text-gray-400 border border-r-0" mode="render" block="">
						<MdOutlineKey size={25} />
					</span>
					<input 
					    type="password" 
					    value={data.password} 
					    className="border border-gray-200 rounded-r-lg outline-none focus:ring-1 ring-blue-300 w-full pl-1 " 
					    id="password2" 
					    name="password" 
					    placeholder="password" 
					    onChange={handleChange}
					    disabled={loader}
					    required="true"/>
				</div>
				{error&&<Alert severity="error">{error}</Alert>}
				{loader&&<div className="flex text-center justify-center items-center py-2"><HashLoader color="#36d7b7" /></div>}   
				<button type='submit' value="button" className="px-4 py-4 rounded bg-green-500 !text-white font-bold hover:bg-green-700 my-4 w-full" id="whoobe-ibemp">Login</button>
			</div>
		</form>
    </div>
  )
}

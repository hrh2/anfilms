import { Box, Button, Checkbox, colors, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Alert from '@mui/material/Alert';
import React,{useState} from "react";
import Axios from 'axios';
import { HashLoader } from "react-spinners";
import { defaultServerUrl } from "../../data/servers";
import { Link } from "react-router-dom";

export default function Login() {
    
    const [data, setData] = useState({
        email_phone: '',
        password: '',
    });
    const [error, setError] = useState('');
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
             const response = await Axios.post(`${defaultServerUrl.authentication}/api/v1/login`, data);
             const token = response.data.token;
             localStorage.setItem('an_videos_user', token);
            setTimeout(()=>{
              window.location = "/";
            },1000)
        } catch (error) {
          setLoader(false)
          setError(error.response.data.message);
        }
   };
   
  return (
    <Grid
    xs={12}
    sm={12}
    md={6}
    lg={6}
    xl={6}
    sx={{
      boxShadow: {
        xs: "",
        sm: "",
        md: "15px 2px 5px -5px",
        lg: "15px 2px 5px -5px",
        xl: "15px 2px 5px -5px",
      },
    }}
  >
    <Box
      sx={{
        backgroundColor: "rgba(0, 24, 57, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        borderRadius: {
          xs: "30px",
          sm: "30px",
          md: "30px 0 0 30px",
          lg: "30px 0 0 30px",
          xl: "30px 0 0 30px",
        },
        justifyContent: "center",                   
      }}
    >
      {!loader?<Box width="80%">
      <form onSubmit={handleSubmit}>
      
        <Box display="flex" flexDirection="column" alignItems="center">
          {/* LOGO */}
          <Box
            sx={{
              mt: "60px",
              width: "50px",
              height: "50px",
              bgcolor: `${colors.green[500]}`,
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 20px ${colors.green[500]}`,
            }}
          >
            <Typography variant="h6" fontWeight="bold" color="white">
            <iframe title="user icon" width={40} height={40} src="https://lottie.host/embed/9bd1bccd-2c87-4bc0-9ad2-3f28cf09e8fc/PZFG1eSTdE.json"></iframe>
            </Typography>
          </Box>
          {/* LOGO END */}

          <Typography color="white" fontWeight="bold" mt={7} mb={3}>
            Login
          </Typography>
        </Box>
        <Box className="grid grid-flow-row gap-2" color={colors.grey[100]}>
        

        {/* INPUTS */}
        <input
            type="text"
            name="email_phone"
            value={data.email_phone}
            onChange={handleChange}
            placeholder="Email or phone"
            className="p-3 bg-transparent border-b-2"
            required
        />
        <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            className="p-3 bg-transparent border-b-2"
            placeholder="Password"
            required
        />
        {/* INPUT END */}
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          mt={2}
          width="100%"
          color="white"
        >
          <div style={{ display: "flex" }}>
            <Checkbox disableRipple sx={{color: `${colors.green[500]}`}} />
            <Typography sx={{mt:1,ml:1}}>Remember me</Typography>
          </div>
          <Link
            to="#forgot"
            style={{
              color: `${colors.green[500]}`,
              textDecoration: "none",
            }}
          >
            Forget password?
          </Link>
        </Box>
        <Button
          variant="contained"
          type="submit"
          fullWidth
          sx={{py:2, mt: 4, boxShadow: `0 0 20px ${colors.green[500]}`,bgcolor: `${colors.green[500]}`}}
        >
        <Typography variant="h5" fontWeight="bold" >Login</Typography>
        </Button>
        <Link
            to="/signup"
            className="text-center block mt-6 font-bold underline"
            style={{
              color: `${colors.green[500]}`,
              textDecoration: "none",
            }}
          >
            Sign Up
          </Link>
          {error&&<Alert severity="error">{error}</Alert>}
        </form>
      </Box>:
        <HashLoader color="#36d7b7" />}
    </Box>
  </Grid>
  )
}

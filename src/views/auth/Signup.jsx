import { Box, Button, colors, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Alert from '@mui/material/Alert';
import React, { useState } from "react";
import Axios from 'axios';
import { HashLoader } from "react-spinners";
import { defaultServerUrl } from "../../data/servers";

export default function Login() {
    
    const [data, setData] = useState({
        firstName: '',
        lastName:'',
        email:'',
        phone:null,
        password: '',
    });
    const [error, setError] = useState('Create Account to have access to all content');
    const [info, setInfo] = useState('');
    const [loader, setLoader] = useState(false);
    
    const handleChange = (event) => {
        setError('');
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoader(true);
        try {
            const response = await Axios.post(`${defaultServerUrl.authentication}/api/v1/signup`, data);
            const token = response.data.token;
            setInfo(response.data.message);
            localStorage.setItem('anfilms_client_token', token);
            setTimeout(() => {
                window.location = "/";
            },10000); 
        } catch (error) {
            setLoader(false);
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
                {!loader ? (
                    <Box width="80%">
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
                                    New Account
                                </Typography>
                            </Box>
                            <Box className="grid grid-flow-row gap-2" color={colors.grey[100]}>

                                {/* INPUTS */}
                                <input
                                    type="text"
                                    name="firstName"
                                    value={data.firstName}
                                    onChange={handleChange}
                                    placeholder="First name"
                                    className="p-3 bg-transparent border-b-2"
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={data.lastName}
                                    onChange={handleChange}
                                    className="p-3 bg-transparent border-b-2"
                                    placeholder="Last Name"
                                    required
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className="p-3 bg-transparent border-b-2"
                                    required
                                />
                                <input
                                    type="number"
                                    name="phone"
                                    value={data.phone}
                                    onChange={handleChange}
                                    className="p-3 bg-transparent border-b-2"
                                    placeholder="Phone Number"
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
                            <Button
                                variant="contained"
                                type="submit"
                                fullWidth
                                sx={{ py: 2, mt: 4, boxShadow: `0 0 20px ${colors.green[500]}`, bgcolor: `${colors.green[500]}` }}
                            >
                                <Typography variant="h5" fontWeight="bold">Sign Up</Typography>
                            </Button>
                            <a
                                href="/auth/login"
                                className="text-center block mt-6 font-bold underline"
                                style={{
                                    color: `${colors.green[500]}`,
                                    textDecoration: "none",
                                }}
                            >
                                Login
                            </a>
                            {error && <Alert severity="error">{error}</Alert>}
                        </form>
                    </Box>
                ) : (
                    <HashLoader color="#36d7b7" />
                )}
                {info && <Alert variant="filled" severity="info">{info}</Alert>}
            </Box>
        </Grid>
    );
}

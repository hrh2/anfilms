import { Box,Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Outlet } from "react-router-dom";
import React from "react";
import bgImage from "../../assets/bg.png"

export default function Main() {
  return (
    <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <Box
        sx={{
          width: {
            sm: "90vw",
            xs: "90vw",
            md: "60vw",
            lg: "60vw",
            xl: "60vw",
          },
        }}
      >
        <Grid container height="90vh">
          {/* <SigninPage /> */}
          <Outlet />
          {/* <TitleBox /> */}
          <Grid xs={0} sm={0} md={6} lg={6} xl={6} minHeight={550}>
            <Box
              sx={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 255, 60, 0.3) , rgba(0, 157, 255, 0.3))`,
                padding: "20px",
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'flex',
                  lg: 'flex', 
                  xl: 'flex'
                },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                borderRadius: "0px 30px 30px 0",
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Typography variant="h4" fontWeight="bold" color="whitesmoke" mb={3}>
                  Join <br /> AN-Films
                </Typography>
                <Typography variant="body1" fontWeight="" color="whitesmoke">
                  Get High-Level Video Quality Service!
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      </Box>
  )
}

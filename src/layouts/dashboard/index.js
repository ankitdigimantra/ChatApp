import React from "react";
import { useTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import Profile from "../../assets/Images/2iN6x15XtxnwJg55oNTe6QKyWut 1 (1).svg";

const DashboardLayout = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          height: "100vh",
          boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)",
          width: 100,
        }}
      >
        <Stack direction="column" alignItems={"center"} sx={{ width: "100%" }}>
          <Box
            sx={{
              backgroundColor: theme.palette.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img src={Profile} alt="Profile" size="48" />
          </Box>
          {Nav_Buttons.map((el) => <IconButton key={el.index}>{el.icon}</IconButton>)}
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;

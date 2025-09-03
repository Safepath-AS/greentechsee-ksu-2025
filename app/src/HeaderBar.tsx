import { Box, Toolbar, IconButton } from "@mui/material";
import MyThingsLogo from "./images/MyThings-logo.svg";
import Profile from "./images/Profile.svg";
import Notification from "./images/Notification.svg";

export const HeaderBar = () => {
  return (
    <Toolbar sx={{ backgroundColor: "#c07dff", height: 80 }}>
      <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
        <Box
          component="img"
          src={MyThingsLogo}
          alt="Logo"
          sx={{ height: 30, mr: 2, paddingTop: 1 }}
        />
      </Box>
      <IconButton sx={{}}>
        <Box
          component="img"
          src={Notification}
          alt="Notifications"
          sx={{ height: 40 }}
        />
      </IconButton>
      <IconButton sx={{}}>
        <Box component="img" src={Profile} alt="profile" sx={{ height: 40 }} />
      </IconButton>
    </Toolbar>
  );
};

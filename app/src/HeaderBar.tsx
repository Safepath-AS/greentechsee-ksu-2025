import { Box, Toolbar } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MyThingsLogo from "./images/MyThings-logo.svg";

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
      <Avatar sx={{ flexGrow: 0 }}></Avatar>
    </Toolbar>
  );
};

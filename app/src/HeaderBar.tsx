import { Box, Toolbar, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export const HeaderBar = () => {
  return (
    <Toolbar sx={{ backgroundColor: "#c07dff", width: "100%" }}>
      <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
        <Typography>MyThings</Typography>
      </Box>
      <Avatar sx={{ flexGrow: 0 }}></Avatar>
    </Toolbar>
  );
};

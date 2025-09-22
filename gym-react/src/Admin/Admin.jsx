import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { ThemeProvider } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { Route, Routes, useNavigate } from "react-router-dom";


import { useDispatch } from "react-redux";
import { ListItemIcon } from "@mui/material";
import Dashboard from "./Dashboard/Dashboard";
import Trainer from "./Trainer/Trainer";
import { logout } from "../redux/Auth/Action";
import Subscription from "./Subsscription/Subscription";

const drawerWidth = 240;

const menu = [
  {name:"Dashboard",path:"/",icon:<i class="fas fa-home"></i>},
  {name:"Trainers",path:"/admin/trainer",icon:<i class="fas fa-dumbbell"></i>},
  {name:"Subscriptions",path:"/admin/subscriptions",icon:<i class="fas fa-dollar-sign"></i>},

];

export default function Admin() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = React.useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/")
  };

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item, index) => (
          <>
           <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
            
          </ListItem>
          <Divider />
          </>
         
        ))}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
        
          <ListItem onClick={handleLogout} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                { <i className="fas fa-sign-out-alt"></i>}
              </ListItemIcon>
              <ListItemText primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );

  const handleSideBarViewInMobile = () => {
    setSideBarVisible(true);
  };

  const handleCloseSideBar = () => {
    setSideBarVisible(false);
  };

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <>
      <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
        {/* <CssBaseline /> */}
        {/* <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} /> */}

        <Drawer
          variant={drawerVariant}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              ...(drawerVariant === "temporary" && {
                top: 0,
                [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                  {
                    position: "fixed",
                    left: 0,
                    right: 0,
                    height: "100%",
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                  },
              }),
            },
          }}
          open={isLargeScreen || sideBarVisible}
          onClose={handleCloseSideBar}
        >
          {drawer}
        </Drawer>
        <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
          {/* <Toolbar /> */}
          {/* <Dashboard/> */}
          <Routes>
            <Route path="/" element={ <Dashboard />}></Route>
            <Route path="/admin/trainer" element={<Trainer/>}></Route>
            <Route path="/admin/subscriptions" element={<Subscription/>}></Route>
           
          </Routes>
         
        </Box>
      </Box>
    </>
  );
}